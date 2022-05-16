(function () {
	var memberOf = {
        Indicium: {
            ICO_PPC: 1,
            ICO_BTC: 2
        }
	}
	
	var known = {
		pubKey: {
			// "pubkey": {name:"John Doe"},
			
			// Developer
			"02113443efda4a9fe9bd38ca1f932aaee2c3cb6ee637f22eaa25af370a1cde6952": {name:"Developer", email:"ttutdxh.nubits@gmail.com", fee:1},
		},
		scriptHash: {
            // Indicium addresses scripthash. // Commented with redeemScript
            "3152a6d3cfeab689e172698f401cd25ff8ee9ef3": {name:"indicium ico ppc multisig #1"}, // 532102084d2c59a9b228bfbe58e3359c366c62951c1a590a20e738db64b7c0074aadba210353e8d13cab823bf8f017ee57c71f52c7fd96111016477b7273cf818249eebac121035c9f3e5053c1adb1f737c25b8c76310ea5302e571f377ccc15aef2816d76ce45210399989d397d3188e9e9afe718fc56776a143e36628f7661ca9b5c20f651d97e0b2103b48093447b0bd80ca371600892422bb39f1a2d1ecf88a20ae50f8beb9a004d3f55ae
            "4dda250f6bde20473725636fc94e324af1d611c7": {name:"indicium ico btc multisig #1"}, // 53210224ba8b09dc976069466b3f95e8fc78dcf0900804da851e7d236d6a46646e861f21027aaa61462aa2d1c74b0388044143af05538cec00bfc18e16a5da54e7050fa1f2210297a38afeb06f176073cd99d344aa084214b481eb6d80386d2f9da353406dcca52102fb39c1b1882e1085e7eee50a67145a776e48b017f141941a3fb9ff2cc5f0c5822103cd3531fee41e09109c3672b958eeb283477b926a0b5b2471d93e46c7e5d4753255ae
		},
		identities: { // id.pubkey{memberof, [deprecated]}
            "backpacker": {
                "0353e8d13cab823bf8f017ee57c71f52c7fd96111016477b7273cf818249eebac1": {
                    member: [
                        memberOf.Indicium.ICO_PPC
                    ]
                },
                "02fb39c1b1882e1085e7eee50a67145a776e48b017f141941a3fb9ff2cc5f0c582": {
                    member: [
                        memberOf.Indicium.ICO_BTC
                    ]
                }
            },
            "mhps": {
                "0399989d397d3188e9e9afe718fc56776a143e36628f7661ca9b5c20f651d97e0b": {
                    member: [
                        memberOf.Indicium.ICO_PPC
                    ]
                },
                "027aaa61462aa2d1c74b0388044143af05538cec00bfc18e16a5da54e7050fa1f2": {
                    member: [
                        memberOf.Indicium.ICO_BTC
                    ]
                }
           },
            "nagalim": {
                "03b48093447b0bd80ca371600892422bb39f1a2d1ecf88a20ae50f8beb9a004d3f": {
                    member: [
                        memberOf.Indicium.ICO_PPC
                    ]
                },
                "03cd3531fee41e09109c3672b958eeb283477b926a0b5b2471d93e46c7e5d47532": {
                    member: [
                        memberOf.Indicium.ICO_BTC
                    ]
                }
            },
            "peerchemist": {
                "02084d2c59a9b228bfbe58e3359c366c62951c1a590a20e738db64b7c0074aadba": {
                    member: [
                        memberOf.Indicium.ICO_PPC
                    ]
                },
                "0297a38afeb06f176073cd99d344aa084214b481eb6d80386d2f9da353406dcca5": {
                    member: [
                        memberOf.Indicium.ICO_BTC
                    ]
                }
            },
            "saeveritt": {
                "035c9f3e5053c1adb1f737c25b8c76310ea5302e571f377ccc15aef2816d76ce45": {
                    member: [
                        memberOf.Indicium.ICO_PPC
                    ]
                },
                "0224ba8b09dc976069466b3f95e8fc78dcf0900804da851e7d236d6a46646e861f" : {
                    member: [
                        memberOf.Indicium.ICO_BTC
                    ]
                }
            }
		}
	};
	

	for (var id in known.identities) { // Compute pubkey list
		for (var pubkey in known.identities[id]) {
			
			// INDICIUM memberOfs
			var INDICIUM = [];
			for (var group in known.identities[id][pubkey].member) {
				if (known.identities[id][pubkey].member[group] == memberOf.Indicium.ICO_PPC) INDICIUM.push("PPC");
				if (known.identities[id][pubkey].member[group] == memberOf.Indicium.ICO_BTC) INDICIUM.push("BTC");
			}
			if (INDICIUM.length > 0) {
				var prefix = (known.identities[id][pubkey].deprecated)?"DEPRECATED ":"";
				known.pubKey[pubkey] = {
					name: prefix + "Indicium ICO @"+ id + " " +(INDICIUM.join(", ")),
					email: "<contact directly>",
					fee: ""
				}
			}
		}
	}
	
	// Mark deprecated. Handling will change in the future. Maybe an alert.
	for (var hash in known.scriptHash) {
		known.scriptHash[hash].name = (known.scriptHash[hash].deprecated)?"DEPRECATED " + known.scriptHash[hash].name:known.scriptHash[hash].name;
	}
	
	window['known'] = known;
})();

console.log("Loaded known identities", known);
