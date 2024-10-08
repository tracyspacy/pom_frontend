export const namesRegistryAbi = [
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'getCommunityAdmin',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
            {
                internalType: 'address',
                name: 'community_admin_',
                type: 'address',
            },
        ],
        name: 'registerCommunity',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
            {
                internalType: 'address',
                name: 'newCommunity_admin_',
                type: 'address',
            },
        ],
        name: 'modifyCommunityAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'userAddress',
                type: 'address',
            },
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'getNameInCommunityByAddress',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'lowerCaseName_',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'lowerCaseCommunity_',
                type: 'string',
            },
        ],
        name: 'availableName',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'name_',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'registerName',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'name_',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'deleteName',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId_',
                type: 'uint256',
            },
        ],
        name: 'resolveAddressByTokenId',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'getCommunityMembershipsCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community',
                type: 'string',
            },
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'stBKG',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stTextBox',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchFrameBKG',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchSLT',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchFace',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stCardTitle',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stTextCLR',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stDrop1',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stDrop2',
                        type: 'string',
                    },
                ],
                internalType: 'struct ISVGStorage.ColorScheme',
                name: 'colorScheme',
                type: 'tuple',
            },
        ],
        name: 'modifyColorSchemeForCommunity',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community',
                type: 'string',
            },
        ],
        name: 'getCommunityColorScheme',
        outputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'stBKG',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stTextBox',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchFrameBKG',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchSLT',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchFace',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stCardTitle',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stTextCLR',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stDrop1',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stDrop2',
                        type: 'string',
                    },
                ],
                internalType: 'struct ISVGStorage.ColorScheme',
                name: 'colorScheme',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'getVerificationExpiration',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'isCommunityVerified',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'isSuspendedByAdmin',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'isSuspendedByOwner',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'suspendCommunityByAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'community_',
                type: 'string',
            },
        ],
        name: 'unSuspendCommunityByAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const;

export const svgRendererAbi = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId_',
                type: 'uint256',
            },
        ],
        name: 'getJson',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'nameAtCommunity',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'memberSince',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'role',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'community',
                type: 'string',
            },
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'stBKG',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stTextBox',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchFrameBKG',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchSLT',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stWitchFace',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stCardTitle',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stTextCLR',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stDrop1',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'stDrop2',
                        type: 'string',
                    },
                ],
                internalType: 'struct ISVGStorage.ColorScheme',
                name: 'colorScheme',
                type: 'tuple',
            },
        ],
        name: 'RenderSVGDummy',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
        constant: true,
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId_',
                type: 'uint256',
            },
        ],
        name: 'RenderSVGProofByTokenId',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
] as const;

export const pomAbi = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
    },
] as const;

export const cardIndexAbi = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getMembershipData',
        outputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'community',
                        type: 'string',
                    },
                    {
                        internalType: 'uint256',
                        name: 'memberSince',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct CardIndex.MembershipData',
                name: 'membershipData_',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
] as const;
