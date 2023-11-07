// Plantilla base para binary trees
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertRecursively(this.root, newNode);
        }
    }
    _insertRecursively(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertRecursively(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertRecursively(node.right, newNode);
            }
        }
    }
    // Ejercicio 1 - Funciones
    static areIdentical(treeA, treeB) {
        return BinaryTree._areIdenticalRecursively(treeA.root, treeB.root);
    }
    static _areIdenticalRecursively(nodeA, nodeB) {
        if (nodeA === null && nodeB === null) {
            return true;
        }
        if (nodeA !== null && nodeB !== null) {
            return (
                nodeA.data === nodeB.data && this._areIdenticalRecursively(nodeA.left, nodeB.left) && this._areIdenticalRecursively(nodeA.right, nodeB.right)
            )
        }
        return false;
    }
    // Ejercicio 2 - Funciones
    static copyTree(originalTree) {
        const copiedTree = new BinaryTree();
        copiedTree.root = BinaryTree._copyTreeRecursively(originalTree.root);
        return copiedTree;
    }
    static _copyTreeRecursively(node) {
        if (node === null) {
            return null;
        }

        const copiedNode = new Node(node.data);
        copiedNode.left = BinaryTree._copyTreeRecursively(node.left);
        copiedNode.right = BinaryTree._copyTreeRecursively(node.right);
        return copiedNode;
    }

    // Ejercicio 3 - Funciones
    visualizeNodesAtLevel(targetLevel) {
        const result = [];
        if (this.root === null || targetLevel < 0) {
            return result;
        }

        const queue = [];
        queue.push({ node: this.root, level: 0 });

        while (queue.length > 0) {
            const { node, level } = queue.shift();
            // console.log(node);
            // console.log(level);
            if (level === targetLevel) {
                result.push(node.data);
            }
            if (level < targetLevel) {
                if (node.left !== null) {
                    queue.push({ node: node.left, level: level + 1 });
                }
                if (node.right !== null) {
                    queue.push({ node: node.right, level: level + 1 });
                }
            }
        }
        return result;
    }
    // Ejercicio 4 - funciones
    countLeaves() {
        return this._countLeavesRecursive(this.root);
    }
    _countLeavesRecursive(node) {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return 1;
        }

        const leftLeaves = this._countLeavesRecursive(node.left);
        const rightLeaves = this._countLeavesRecursive(node.right);

        return leftLeaves + rightLeaves;
    }
}

/* // Ejercicio 1 - Creacion de trees
const treeA = new BinaryTree();
treeA.insert(5);
treeA.insert(3);
treeA.insert(8);

const treeB = new BinaryTree();
treeB.insert(5);
treeB.insert(3);
treeB.insert(8);

const treeC = new BinaryTree();
treeC.insert(5);
treeC.insert(2);
treeC.insert(8);
// Ejercicio 1 - Testeo
console.log('Tree A and Tree B are identical:', BinaryTree.areIdentical(treeA, treeB));
console.log('Tree A and Tree C are identical:', BinaryTree.areIdentical(treeA, treeC));
console.log(treeA); */

/* // Ejercicio 2 - Creacion de trees
const treeToCopy = new BinaryTree();
treeToCopy.insert(23);
treeToCopy.insert(22);
treeToCopy.insert(24);
treeToCopy.insert(10);
treeToCopy.insert(48);
treeToCopy.insert(5);
treeToCopy.insert(69);
treeToCopy.insert(1);
// Ejercicio 2 - Testeo
console.log(treeToCopy);
const treeCopiedfromAbove = BinaryTree.copyTree(treeToCopy);
console.log(treeCopiedfromAbove); */

/* // Ejercicio 3 - Creacion de trees
const treeToCheck = new BinaryTree();
treeToCheck.insert(9);
treeToCheck.insert(5);
treeToCheck.insert(15);
treeToCheck.insert(11);
treeToCheck.insert(4);
treeToCheck.insert(7);
treeToCheck.insert(16);
console.log(treeToCheck);
// Ejercicio 3 - Testeo
let resultNodes = treeToCheck.visualizeNodesAtLevel(1);
console.log(resultNodes); */

// Ejercicio 4 - Creacion de trees
const treeForLeaves = new BinaryTree();
treeForLeaves.insert(23);
treeForLeaves.insert(12);
treeForLeaves.insert(30);
treeForLeaves.insert(8);
treeForLeaves.insert(25);
treeForLeaves.insert(15);
treeForLeaves.insert(34);
// Ejercicio 4 - Testeo
let resultLeaves = treeForLeaves.countLeaves();
console.log(resultLeaves);