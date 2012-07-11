eStruct
=====

JavaScript class to handle all common hash table/structure functions

Example
====
<pre>
&lt;script>
// Create a structure / hash table
var h = new eStruct();

// Add/Update a Key/Value pair to the hash table
// Any object that JavaScript can deal maybe added as a value
h.Add("key", "value");

// Delete a Key/Value pair from the table
h.Delete("key");

// Delete all data
h.Clear();

// Is the structure empty?  Returns true if it is.
alert(h.IsEmpty());

// Get the value of a key from the stucture.  Returns null if none is found
var y = h.Get();

// Count the number of elements in the structure
var count = h.Len();

// Return an array of all the keys as they were added
var kl = h.KeyList();

// Return a sorted array of all the keys
// 1 = Sort Ascended, 0 = Sort Decending
h.KeyListSort(1);

// Return an array of all the values as they were added
var vl = h.ValueList();

// Return a sorted array of all the values
// 1 = Sort Ascended, 0 = Sort Decending
h.ValueListSort(1);

// Return a string of serialized XML data of teh structure items
// Object within the structure cannot be serialized
var s = h.Serialize();

&lt;/script>
</pre>

Planned Features
=====

 * Add a deserialize function
 
 

