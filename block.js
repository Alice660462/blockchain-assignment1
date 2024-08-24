'use strict';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { SHA256 } = require("crypto-js");
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    // calculate the the hash for a block 
    calculateHash() {
        return SHA256(this.Index + this.timestamp + this.data + this.previousHash).toString();
    }

}

export {Block};
