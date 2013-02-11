// Note: don't use an object to store the inserted elements.
var hashFunction;
var makeHashTable = function(){
  var hashTable = {
    hashFunction: hashFunction
    //fixme
  };
  return hashTable;
}


// DON'T WORRY ABOUT CODE BELOW HERE

hashFunction = function(str, maxResult){
  var hash = 0;
  if (str.length == 0) { return hash; }
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = ((hash<<5) - hash) + char;
    hash = Math.abs(hash);
    hash = hash & hash; //Convert to 32-bit integer
  }
  return hash % maxResult;
}