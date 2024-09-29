import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { namesRegistryConfig } from './contracts';

interface NamesRegistryWriteHookInterface {
    functionName: string;
    functionArgs: (string | string[])[];
    txValue: bigint;
}

export function NamesRegistryWriteHook(fn: NamesRegistryWriteHookInterface) {
    const {
        writeContract,
        data,
        error: writeError,
        isPending,
        isError: isWriteError,
    } = useWriteContract();
    const write = () =>
        writeContract({
            ...namesRegistryConfig,
            functionName: fn.functionName,
            args: fn.functionArgs,
            value: fn.txValue,
        });

    const {
        data: receipt,
        isLoading,
        isSuccess,
        isError: isTxError,
        error: txError,
        refetch: txRefetch,
    } = useWaitForTransactionReceipt({
        confirmations: 1,
        hash: data,
    });

    return {
        write,
        receipt,
        isPending,
        isSuccess,
        isWriteError,
        isTxError,
        txError,
        writeError,
        isLoading,
        txRefetch,
    };
}
