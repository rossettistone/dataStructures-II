var makeBinarySearchTree = function(initkey, payload){
  var binarySearchTree = {
    root: [],
    key: initkey,
    payload: payload,
    insert: function(key, value) {
  		this.key === key ? 
  			this.payload = value :
  			key < this.key ?
  				this.root[0] === undefined ?
  					this.root[0] = makeBinarySearchTree(key, value) : 
  					this.root[0].insert(key, value) : 
  				this.root[1] === undefined ?
  					this.root[1] = makeBinarySearchTree(key, value) :
  					this.root[1].insert(key, value);			
    },
    search: function(searchkey) {
    	return this.key === searchkey ? 
  			this.payload :
  			this.root.length === 0 ?
  				"Key not found in tree!" :
	  			searchkey < this.key ?
	  				this.root[0].search(searchkey) :
	  				this.root[1].search(searchkey);
    }
  };
  return binarySearchTree;
}