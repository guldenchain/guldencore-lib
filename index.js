'use strict';

var guldencore = module.exports;

// module information
guldencore.version = 'v' + require('./package.json').version;
guldencore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of guldencore-lib found. ' +
      'Please make sure to require guldencore-lib and check that submodules do' +
      ' not also include their own guldencore-lib dependency.';
    throw new Error(message);
  }
};
guldencore.versionGuard(global._guldencore);
global._guldencore = guldencore.version;

// crypto
guldencore.crypto = {};
guldencore.crypto.BN = require('./lib/crypto/bn');
guldencore.crypto.ECDSA = require('./lib/crypto/ecdsa');
guldencore.crypto.Hash = require('./lib/crypto/hash');
guldencore.crypto.Random = require('./lib/crypto/random');
guldencore.crypto.Point = require('./lib/crypto/point');
guldencore.crypto.Signature = require('./lib/crypto/signature');

// encoding
guldencore.encoding = {};
guldencore.encoding.Base58 = require('./lib/encoding/base58');
guldencore.encoding.Base58Check = require('./lib/encoding/base58check');
guldencore.encoding.BufferReader = require('./lib/encoding/bufferreader');
guldencore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
guldencore.encoding.Varint = require('./lib/encoding/varint');

// utilities
guldencore.util = {};
guldencore.util.buffer = require('./lib/util/buffer');
guldencore.util.js = require('./lib/util/js');
guldencore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
guldencore.errors = require('./lib/errors');

// main bitcoin library
guldencore.Address = require('./lib/address');
guldencore.Block = require('./lib/block');
guldencore.MerkleBlock = require('./lib/block/merkleblock');
guldencore.BlockHeader = require('./lib/block/blockheader');
guldencore.HDPrivateKey = require('./lib/hdprivatekey.js');
guldencore.HDPublicKey = require('./lib/hdpublickey.js');
guldencore.Networks = require('./lib/networks');
guldencore.Opcode = require('./lib/opcode');
guldencore.PrivateKey = require('./lib/privatekey');
guldencore.PublicKey = require('./lib/publickey');
guldencore.Script = require('./lib/script');
guldencore.Transaction = require('./lib/transaction');
guldencore.URI = require('./lib/uri');
guldencore.Unit = require('./lib/unit');

// dependencies, subject to change
guldencore.deps = {};
guldencore.deps.bnjs = require('bn.js');
guldencore.deps.bs58 = require('bs58');
guldencore.deps.Buffer = Buffer;
guldencore.deps.elliptic = require('elliptic');
guldencore.deps.scryptsy = require('scryptsy');
guldencore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
guldencore.Transaction.sighash = require('./lib/transaction/sighash');
