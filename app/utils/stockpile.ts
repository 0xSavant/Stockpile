export type Stockpile = {
  "version": "0.1.0",
  "name": "stockpile",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        }
      ]
    },
    {
      "name": "createFundraiser",
      "accounts": [
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageLink",
          "type": "string"
        },
        {
          "name": "websiteLink",
          "type": "string"
        },
        {
          "name": "contactLink",
          "type": "string"
        }
      ]
    },
    {
      "name": "contribute",
      "accounts": [
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contributor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u8"
        }
      ]
    },
    {
      "name": "fundraiserWithdraw",
      "accounts": [
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "username",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "fundraiser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "publicKey"
          },
          {
            "name": "creator",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "imageLink",
            "type": "string"
          },
          {
            "name": "contactLink",
            "type": "string"
          },
          {
            "name": "websiteLink",
            "type": "string"
          },
          {
            "name": "raised",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "contributor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "contributor",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u8"
          },
          {
            "name": "contributionCount",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "IncorrectPDAPubkey",
      "msg": "The pubkey supplied is incorrect"
    },
    {
      "code": 6001,
      "name": "IncorrectBump",
      "msg": "The bump supplied is incorrect"
    },
    {
      "code": 6002,
      "name": "NameTooLong",
      "msg": "Fundraiser Name is too long"
    },
    {
      "code": 6003,
      "name": "DescriptionTooLong",
      "msg": "Description is too long"
    }
  ]
};

export const IDL: Stockpile = {
  "version": "0.1.0",
  "name": "stockpile",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        }
      ]
    },
    {
      "name": "createFundraiser",
      "accounts": [
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageLink",
          "type": "string"
        },
        {
          "name": "websiteLink",
          "type": "string"
        },
        {
          "name": "contactLink",
          "type": "string"
        }
      ]
    },
    {
      "name": "contribute",
      "accounts": [
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contributor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u8"
        }
      ]
    },
    {
      "name": "fundraiserWithdraw",
      "accounts": [
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "username",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "fundraiser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "publicKey"
          },
          {
            "name": "creator",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "imageLink",
            "type": "string"
          },
          {
            "name": "contactLink",
            "type": "string"
          },
          {
            "name": "websiteLink",
            "type": "string"
          },
          {
            "name": "raised",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "contributor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "contributor",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u8"
          },
          {
            "name": "contributionCount",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "IncorrectPDAPubkey",
      "msg": "The pubkey supplied is incorrect"
    },
    {
      "code": 6001,
      "name": "IncorrectBump",
      "msg": "The bump supplied is incorrect"
    },
    {
      "code": 6002,
      "name": "NameTooLong",
      "msg": "Fundraiser Name is too long"
    },
    {
      "code": 6003,
      "name": "DescriptionTooLong",
      "msg": "Description is too long"
    }
  ]
};
