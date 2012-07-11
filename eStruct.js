/* 
** eStruct **
JavaScript function to handle hash tables
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license
https://github.com/tekrat/eDrop
*/
function eStruct(){

		this.structure = {};

		// Add(Key Name, Value) - Add a key/value pair
		this.Add = function(key, value){
				this.structure[key] = value;
		}
		
		// IsEmpty() - Returns true if there no key/value pairs
		this.IsEmpty = function(){
				return (this.Len() == 0);
		}
		

		// KeyExists(Key Name) - Does this key exists in the object?
		this.KeyExists = function(key){
				return this.structure.hasOwnProperty(key);
		}

		// KeyList() - Returns an array with all keys in the object as they were added
		this.KeyList = function(){
				var ReturnValue = new Array();
				for (var key in this.structure) {
						ReturnValue.push(key);
				}
				return ReturnValue;             
		}

		// KeyListSort(Sort Direction) - Returns an array with all keys in the structure 
		// sorted by your preference: 1 - Ascending (Default), 0 - Descending
		this.KeyListSort = function(SortDirection){
				var ReturnValue = this.KeyList();
				if(SortDirection == 0){ 
						return ReturnValue.sort().reverse();                            
				}else{
						return ReturnValue.sort();
				}
		}

		// ValueList() - Returns an array with all values in the structure as they were added
		this.ValueList = function(){
				var ReturnValue = new Array();
				for (var key in this.structure) {
						ReturnValue.push(this.structure[key]);
				}
				return ReturnValue;             
		}

		// KeyListSort(Sort Direction) - Returns an array with all values in the structure 
		// sorted by your preference: 1 - Ascending (Default), 0 - Descending
		this.ValueListSort = function(SortDirection){
				var ReturnValue = this.ValueList();
				if(SortDirection == 0){ 
						return ReturnValue.sort().reverse();                            
				}else{
						return ReturnValue.sort();
				}
		}

		// Len() - Returns the number of items in the structure
		this.Len = function(){
				var ReturnValue = 0;
				for (var k in this.structure) {
						ReturnValue++;
				}
				return ReturnValue;
		}
		
		// Get(Key Name) - Returns the value of a stucture item,
		//	returns NULL if the key cannot be found
		this.Get = function (key){
				if( this.KeyExists(key) ){
						return this.structure[key];
				}else{
						return null;
				}
		}

		// Delete(Key Name) - Removes a specfic key/item pair from the structure
		this.Delete = function(key){
				if( this.KeyExists(key) ){
						delete this.structure[key]
				}else{
						return undefined;
				}
		}

		// Clear() - Removes everything out of the structure
		this.Clear = function(){
				for (var key in this.structure) {
						this.Delete(key);
				}
		}	
		
		// GetStruct() - Returns the raw structure
		this.GetStruct = function(){
			return this.structure;		
		}
		
		// Serialize() - Returns an XML string
		this.Serialize = function(){
			var ReturnValue = "<struct>\r\n";
			for (var k in this.structure) {
				ReturnValue += "	<" + k + ">" +
					encodeURIComponent(this.structure[k]) +
					"</" + k + ">\r\n";
			}
			ReturnValue += "</struct>";
		
			return ReturnValue;		
		}

}