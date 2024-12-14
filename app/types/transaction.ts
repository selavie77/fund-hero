// types/transaction.ts
import { Investment } from "./investment";
import { Portfolio } from "./portfolio";
import { Broker } from "./broker";
import { CustodianAccount } from "./custodianAccount";
import { Strategy } from "./strategy";

export interface Transaction {
    id: string;
    portfolioId: string;
    investmentId: string;
    brokerId: string;
    custodianAccountId: string;
    strategyId: string | null;
    tradeDate: Date;
    settleDate: Date;
    actualSettleDate: Date | null;
    quantity: number;
    price: number;
    investmentAccruedInterest: number;
    counterSDateFx: number;
    counterTDateFx: number;
    netInvestmentAmount: number;
    netCounterAmount: number;
    secFeeAmount: number;
    totalCommission: number;
    accruedInterest: number;
    transactionType: 'Buy' | 'Sell' | 'Sell Short' | 'Cover Short' | 'Option Buy' | 'Option Sell';
    investment?: Investment;
    portfolio?: Portfolio;
    broker?: Broker;
    custodianAccount?: CustodianAccount;
    strategy?: Strategy;
    createdAt: Date;
    createdBy: string | null;
    updatedAt: Date;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
}