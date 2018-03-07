const BinarySearchTree = require('./bst');



//travese left
//traverse right
// look at the data
function preOrder(tree) {
  //break case; if tree is null
  if (!tree) {
    return;
  }

  console.log(tree.key);

  if (tree.left){
    preOrder(tree.left);
  }

  if (tree.right){
    preOrder(tree.right);
  }

}

function inOrder(tree) {

  //break case; if tree is null
  if (!tree) {
    return;
  }

  if (tree.left){
    inOrder(tree.left);
  }

  console.log(tree.key);

  if (tree.right){
    inOrder(tree.right);
  }
}

function postOrder(tree) {
  //break case; if tree is null
  if (!tree) {
    return;
  }

  if (tree.left){
    postOrder(tree.left);
  }

  if (tree.right){
    postOrder(tree.right);
  }

  console.log(tree.key);

}



const main = () => {
  const test = new BinarySearchTree();
  test.insert(25);
  test.insert(15);
  test.insert(50);
  test.insert(10);
  test.insert(24);
  test.insert(35);
  test.insert(70);
  test.insert(4);
  test.insert(12);
  test.insert(18);
  test.insert(31);
  test.insert(44);
  test.insert(66);
  test.insert(90);
  test.insert(22);

  console.log(postOrder(test));
};

main();
