import { sleep } from "./utils";
import { logger } from '@polkadot/util';
import { renewalOrder } from "./crustApi";
import { seeds } from "./consts";
const l = logger('main');

const homePageFiles = [
    "Qmdy2Hqdxoq2PuAkvoDZ5SqYjAKym58Gh39Lm5gPChyHwL",
    "QmRYJN6V5BzwnXp7A2Avcp5WXkgzyunQwqP3Es2Q789phF",
    "QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t",
    "QmPrU21TrRtWcrWsNmHfBmSvTKZApKCEZrDGncnheMGKsj",
    "QmcYfQ6wjb9hop4LhJ9MZrX8GGiJRm6PxBfnVo2JqzEm9V",
    "QmWf36uY5E8mLD9nQnVxMEymAMhRh1yJ9th2fqQe1UmLqg",
    "QmbS5j7xUkPapiWs3utyFJ6VGyoEH2y49TYizfPVZhUud1",
    "QmdVYW9Dpa26bjZowJQJb5YVtTyodianLn9TCcXeNeixf4",
    "Qme9uUpunio7heGDnnfsptYWzjLJgvD2hkbLGcvehPz5EK",
    "QmYVRP7puUhGvQPuThHK2mtQgj2nUAoJYkBgXYxwiaC8Dq",
    "QmdPsqY6W1v5KUYH8Q1m8SCJwFLXSwRJeeeft9WS6ct3JA",
    "QmPeoZuvhq8G5SQ95KJ35xGVLP3pHtF2hahrtFsjTaZbFk",
    "QmTeYZVYucgF94cU9Bfuew6shWiTESYKYjDFntG9xK5Hru",
]

const main = async () => {
    for (; ;) {
        for (const cids of homePageFiles) {
            await renewalOrder(cids, seeds);  
        }
        await sleep(60 * 1000 * 20)
    }
}

main().catch(e => {
    l.error(e);
    process.exit(1);
});
