describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(7, "test");
  });

  it("should have a root", function() {
    expect(Object.keys(binarySearchTree)).toContain("root");
  });

  describe("insert", function() {

    it("should be a method", function() {
      expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    });

    it("should take a key:value pair and store the value at the key location", function() {
      binarySearchTree.insert(42, "life, the universe, and everything");
      
      expect(binarySearchTree.search(42)).toEqual("life, the universe, and everything");
    });

    it("should update the value at a key position if the key already exists", function() {
      binarySearchTree.insert(42, "life, the universe, and everything");
      binarySearchTree.insert(42, "but what's the question?");
      
      expect(binarySearchTree.search(42)).toEqual("but what's the question?");
    });

  });

  describe("search", function() {
    
    it("should have a method named 'search'", function() {
      expect(binarySearchTree.search).toEqual(jasmine.any(Function));
    });

    it("should take a key and return the relevant value", function() {
      binarySearchTree.insert(42, "life, the universe, and everything");
      binarySearchTree.insert(4, "this is 4");
      binarySearchTree.insert(2, "twins!");

      expect(binarySearchTree.search(42)).toEqual("life, the universe, and everything");
      expect(binarySearchTree.search(8)).toEqual("Key not found in tree!");
    });

  });

});