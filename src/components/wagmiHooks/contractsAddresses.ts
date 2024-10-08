export const contractAddresses: {
    [network: string]: {
        namesRegistry: `0x${string}`;
        svgRenderer: `0x${string}`;
        pomToken: `0x${string}`;
        storage: `0x${string}`;
    };
} = {
    mainnet: {
        namesRegistry: '0xaCeE2CB8Cf92D0d6DC7eB80bEF7dDecf75482819',
        svgRenderer: '0x09BF011Ed8a82a95b2721986082C07f4b074cba0',
        pomToken: '0x187e3bf7a18cf0dBce3E0B6D2CCc00CE444F61A7',
        storage: '0xCD95e385C2f7Da32675dfD701a32BeB0F1442087',
    },
    sepolia: {
        namesRegistry: '0xF357fEb9B33Dc568aDc9d5382Ba69FD198832079',
        svgRenderer: '0x21DA9d030582A8a59143A9568c24C1c8a7ef6c57',
        pomToken: '0xF318d982B8E55F9fa238b1392e0B8Ec3197D7080',
        storage: '0xd94C0C60A25044039472C6407Abb013A82bf85C6',
    },
};

export const currentNetwork =
    import.meta.env.VITE_APP_ENV === 'mainnet' || import.meta.env.VITE_APP_ENV === 'sepolia'
        ? import.meta.env.VITE_APP_ENV
        : 'sepolia';
export const currentContractAddresses =
    contractAddresses[currentNetwork as keyof typeof contractAddresses];
