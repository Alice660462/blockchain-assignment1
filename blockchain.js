
'use strict';
import { Block } from'./block.js';

class Blockchain {
    //constructor, it generates an array that has the first default block by using firstBlock()function.
    constructor() {
        this.chain = [this.firstBlock()];

    }
    // function that create the first block in the array.
    firstBlock() {
        return new Block(0, Date.now(), " ");
    }
    //function for adding new blocks, it creates a new block with three input arguments and last argument is determined by the lastBlock().
    addBlock(index, timestamp, data) {
        this.chain.push(new Block(index, timestamp, data, this.lastBlock().hash));
    }
    lastBlock() {
        return this.chain[this.chain.length - 1];
    }

    // method to validate the integrity of the blockchain.
    validChain() {
        for (let i = 1; i < this.chain.length; i++) {
            //check if the current block's hash id correctly calculated.
            if (this.chain[i].hash !== this.chain[i].calculateHash()) return false;
            // check if the current block's previousHash matches the previous block's hash.
            if (this.chain[i - 1].hash !== this.chain[i].previousHash) return false;
        }
        return true;
    }
    // this function generates index for new blocks.
    nextIndex() {
        return this.lastBlock().index + 1;
    }
}



let chain1 = new Blockchain();

chain1.addBlock(chain1.nextIndex(), new Date(2024,1,2),"string");
chain1.addBlock(chain1.nextIndex(), new Date(2023, 4, 2), "name");
chain1.addBlock(chain1.nextIndex(), new Date(2024, 5, 3), 15151);
chain1.addBlock(chain1.nextIndex(), new Date(2024, 10, 2), "hello");
chain1.addBlock(chain1.nextIndex(), new Date(2024, 7, 8), "yes");
console.log(chain1.validChain());

// altering data to show that validChain() returns false.
chain1.chain[1].data = "heeelo";
console.log(chain1.validChain());