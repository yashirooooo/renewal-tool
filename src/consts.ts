// Load env

// eslint-disable-next-line node/no-extraneous-require
require('dotenv').config();

export const chainAddr = process.env.CHAIN_ADDR as string;
export const seeds = process.env.SEEDS as string;
