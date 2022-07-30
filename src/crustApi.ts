import { sendTx } from './utils/tx';
import Keyring from '@polkadot/keyring';
import { mainnetApi } from './api/crustMainnetApi';

const keyring = new Keyring();

const fileSize = 2000000000;
const tips = '1000000000';
const delay = 100800;


export const parseObj = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
};


export async function renewalOrder(cid: string, seeds: string) {
    try {
        // 1. Try connect to Crust Network
        const chain = mainnetApi;
        const api = await chain.isReadyOrError;
        const header = await api.rpc.chain.getBlock();
        const bn = header.block.header.number.toNumber()
        const fileOnchain = parseObj(await api.query.market.filesV2(cid.trim()));
        if (fileOnchain && fileOnchain.expired_at < (delay + bn)) {
            const tx = api.tx.market.placeStorageOrder(cid.trim(), fileSize, tips, '');

            const res = await sendTx(api, tx, seeds);
            if (res?.status) {
                console.log(`calculate success`);
            } else {
                console.error(
                    `calculate failed with ${res?.details}`
                );
            }
            return res;
        } else {
        }
    } catch (e) {
        return {
            status: false,
            message: 'Error',
            details: e
        };
    }
}
