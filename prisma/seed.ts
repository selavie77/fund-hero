// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const chartOfAccountsData = [
    { accountId: 'AccretionIncome', description: 'AccretionIncome', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'AccruedInterestExpense', description: 'AccruedInterestExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'AccruedInterestPayable', description: 'AccruedInterestPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'AccruedInterestReceipt', description: 'AccruedInterestReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'AccruedInterestReceivable', description: 'AccruedInterestReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'All', description: 'Special summary account', baseType: 'Other', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'AllDividendRevExp', description: 'All Dividend Revenue and Expense', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'AllExpenses', description: 'All Expenses', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'AllInterest', description: 'All Interest', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'AllInterestRevExp', description: 'All Interest Revenue and Expense', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'AllRealFXGainLoss', description: 'AllRealFXGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'AllRealGainLoss', description: 'AllRealGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'AllRealPriceGainLoss', description: 'AllRealPriceGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'AllRevenues', description: 'All Revenues', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'AmortizationExpense', description: 'AmortizationExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'BorrowFee', description: 'Borrow Fee', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'CapitalPayable', description: 'CapitalPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'CapitalReceivable', description: 'CapitalReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'CashBasisAccruedPercent', description: 'Cash Basis Lot Accrual Write down Percent', baseType: 'Other', accountRole: 'StatQuantity', accountClass: 'Statistical', accountSubType: 'Other' },
    { accountId: 'CashInLieu', description: 'CashInLieu', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'ChangeInAccruedInterest', description: 'ChangeInAccruedInterest', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ChangeInAccruedInterestLong', description: 'ChangeInAccruedInterestLong', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ChangeInAccruedInterestShort', description: 'ChangeInAccruedInterestShort', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ChgUnrealizedFXGL', description: 'Change in Unrealized FX Gain/Loss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'UnRealGainLoss' },
    { accountId: 'ChgUnrealizedPriceGL', description: 'Change in Unrealized Price Gain/Loss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'UnRealGainLoss' },
    { accountId: 'CommissionAdjustment', description: 'CommissionAdjustment', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'CommissionExpense', description: 'CommissionExpense', baseType: 'Other', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'CommissionPayable', description: 'CommissionPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ContributedAccruedInterest', description: 'ContributedAccruedInterest', baseType: 'OwnersEquity', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ContributedCost', description: 'ContributedCost', baseType: 'OwnersEquity', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ContributedFXGain', description: 'ContributedFXGain', baseType: 'OwnersEquity', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ContributedPriceGain', description: 'ContributedPriceGain', baseType: 'OwnersEquity', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'Cost', description: 'System account for Standard Cost Basis', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'CouponInterestPayable', description: 'CouponInterestPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'CouponInterestReceivable', description: 'CouponInterestReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'CoverShortAccruedInterestExpense', description: 'CoverShortAccruedInterestExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'CurrencyGLOnSettlements', description: 'CurrencyGLOnSettlements', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'CustodianXfer', description: 'CustodianXfer', baseType: 'OwnersEquity', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'DividendExpense', description: 'DividendExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'DividendReceipt', description: 'DividendReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'DividendsPayable', description: 'DividendsPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'DividendsReceivable', description: 'DividendsReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'EndingAccruedInterest', description: 'EndingAccruedInterest', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Statistical', accountSubType: 'Other' },
    { accountId: 'ForwardFxPayable', description: 'ForwardFxPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ForwardFxReceivable', description: 'ForwardFxReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'InterestExpense', description: 'InterestExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'InterestReceipt', description: 'InterestReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'LongTermCurrencyGainLoss', description: 'LongTermCurrencyGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'LongTermPriceGainLoss', description: 'LongTermPriceGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'MarkToMarketPrice', description: 'MarkToMarketPrice', baseType: 'Other', accountRole: 'StatQuantity', accountClass: 'Statistical', accountSubType: 'Other' },
    { accountId: 'MgmtFeeExpense', description: 'MgmtFeeExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'MidTermCurrencyGainLoss', description: 'MidTermCurrencyGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'MidTermPriceGainLoss', description: 'MidTermPriceGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'MiscellaneousCharges', description: 'MiscellaneousCharges', baseType: 'Expense', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'MktValSummary', description: 'Summary of Market Value Accounts', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'MToMCost', description: 'System account for MarkToMarket Cost Bas', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'MToMFXGL', description: 'MToMFXGL', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'UnRealGainLoss' },
    { accountId: 'MToMFXGLPeriodEnd', description: 'MToMFXGLPeriodEnd', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'MToMFXGLPeriodStart', description: 'MToMFXGLPeriodStart', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'MToMFXGLQuarterStart', description: 'MToMFXGLQuarterStart', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'MToMPriceGL', description: 'MToMPriceGL', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'UnRealGainLoss' },
    { accountId: 'MToMPriceGLPeriodEnd', description: 'MToMPriceGLPeriodEnd', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'MToMPriceGLPeriodStart', description: 'MToMPriceGLPeriodStart', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'MToMPriceGLQuarterStart', description: 'MToMPriceGLQuarterStart', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'NMToMFXGL', description: 'NMToMFXGL', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'NMToMFXGLPeriodEnd', description: 'NMToMFXGLPeriodEnd', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'NMToMFXGLPeriodStart', description: 'NMToMFXGLPeriodStart', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'NMToMFXGLQuarterStart', description: 'NMToMFXGLQuarterStart', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'NMToMPriceGL', description: 'NMToMPriceGL', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'NMToMPriceGLPeriodEnd', description: 'NMToMPriceGLPeriodEnd', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'NMToMPriceGLPeriodStart', description: 'NMToMPriceGLPeriodStart', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'NMToMPriceGLQuarterStart', description: 'NMToMPriceGLQuarterStart', baseType: 'Revenue', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'GainLoss' },
     { accountId: 'NullLotList', description: 'NullLotList', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
     { accountId: 'NVMToMFXGL', description: 'NVMToMFXGL', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
        { accountId: 'NVMToMFXGLPeriodEnd', description: 'NVMToMFXGLPeriodEnd', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
       { accountId: 'NVMToMFXGLPeriodStart', description: 'NVMToMFXGLPeriodStart', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
        { accountId: 'NVMToMFXGLQuarterStart', description: 'NVMToMFXGLQuarterStart', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
        { accountId: 'NVMToMPriceGL', description: 'NVMToMPriceGL', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
          { accountId: 'NVMToMPriceGLPeriodEnd', description: 'NVMToMPriceGLPeriodEnd', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
        { accountId: 'NVMToMPriceGLPeriodStart', description: 'NVMToMPriceGLPeriodStart', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
        { accountId: 'NVMToMPriceGLQuarterStart', description: 'NVMToMPriceGLQuarterStart', baseType: 'Revenue', accountRole: 'NotationalVirtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'OIDAmortizationExpense', description: 'OIDAmortizationExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'OIDAmortizationIncome', description: 'OIDAmortizationIncome', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'OIDExpenseAdjustment', description: 'OIDExpenseAdjustment', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'OIDIncomeAdjustment', description: 'OIDIncomeAdjustment', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'OnHand', description: 'OnHand', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OriginalFace', description: 'OriginalFace', baseType: 'Other', accountRole: 'StatQuantity', accountClass: 'Statistical', accountSubType: 'Other' },
    { accountId: 'OverdueAccruedInterestPayable', description: 'OverdueAccruedInterestPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueAccruedInterestReceivable', description: 'OverdueAccruedInterestReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueCapitalPayable', description: 'OverdueCapitalPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueCapitalReceivable', description: 'OverdueCapitalReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueCouponInterestPayable', description: 'OverdueCouponInterestPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueCouponInterestReceivable', description: 'OverdueCouponInterestReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueDividendsPayable', description: 'OverdueDividendsPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueDividendsReceivable', description: 'OverdueDividendsReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueForwardFxPayable', description: 'OverdueForwardFxPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueForwardFxReceivable', description: 'OverdueForwardFxReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverduePayable', description: 'OverduePayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverduePaydownPayable', description: 'OverduePaydownPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverduePaydownReceivable', description: 'OverduePaydownReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverduePurchasedAI', description: 'OverduePurchasedAI', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueReceivable', description: 'OverdueReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueReclaimTaxReceivable', description: 'OverdueReclaimTaxReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueSoldAI', description: 'OverdueSoldAI', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueSpotFxPayable', description: 'OverdueSpotFxPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueSpotFxReceivable', description: 'OverdueSpotFxReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'OverdueWithholdingTaxPayable', description: 'OverdueWithholdingTaxPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'Payable', description: 'Payable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'PaydownPayable', description: 'PaydownPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'PaydownReceivable', description: 'PaydownReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'PurchasedAccruedInterestExpense', description: 'PurchasedAccruedInterestExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'PurchasedAI', description: 'PurchasedAI', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'Quantity', description: 'Quantity', baseType: 'Other', accountRole: 'StatQuantity', accountClass: 'Statistical', accountSubType: 'Other' },
    { accountId: 'Receivable', description: 'Receivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'ReclaimTaxReceipt', description: 'ReclaimTaxReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'ReclaimTaxReceivable', description: 'ReclaimTaxReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
     { accountId: 'RelativeDiscountAmortizationExpense', description: 'RelativeDiscountAmortizationExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'RelativeDiscountAmortizationIn', description: 'RelativeDiscountAmortizationIncome', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
       { accountId: 'RelativePremiumAmortizationExpense', description: 'RelativePremiumAmortizationExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'RelativePremiumAmortizationInc', description: 'RelativePremiumAmortizationIncome', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'RepoPayable', description: 'RepoPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'RepoReceivable', description: 'RepoReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'RetainedEarnings', description: 'RetainedEarnings', baseType: 'OwnersEquity', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'RetainedEarningsTransit', description: 'RetainedEarningsTransit', baseType: 'OwnersEquity', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'SecFee', description: 'SecFee', baseType: 'Expense', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'Section988Expense', description: 'Section988Expense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'Section988Income', description: 'Section988Income', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'SettlementDate', description: 'SettlementDate', baseType: 'Other', accountRole: 'StatVariable', accountClass: 'Variable', accountSubType: 'Other' },
    { accountId: 'ShortRebate', description: 'ShortRebate', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'ShortTermCurrencyGainLoss', description: 'ShortTermCurrencyGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'ShortTermPriceGainLoss', description: 'ShortTermPriceGainLoss', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'SoldAccruedInterestReceipt', description: 'SoldAccruedInterestReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'SoldAI', description: 'SoldAI', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'SoldShortAccruedInterestReceipt', description: 'SoldShortAccruedInterestReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
     { accountId: 'SpotFxPayable', description: 'SpotFxPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'SpotFxReceivable', description: 'SpotFxReceivable', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'StampDuty', description: 'StampDuty', baseType: 'Expense', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'TotalDiscountAmortizationExpense', description: 'TotalDiscountAmortizationExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'TotalDiscountAmortizationIncome', description: 'TotalDiscountAmortizationIncome', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'TotalPremiumAmortizationExpense', description: 'TotalPremiumAmortizationExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'TotalPremiumAmortizationIncome', description: 'TotalPremiumAmortizationIncome', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'TradeDate', description: 'TradeDate', baseType: 'Other', accountRole: 'StatVariable', accountClass: 'Variable', accountSubType: 'Other' },
    { accountId: 'UnrealizedFXGL', description: 'Unrealized FX Gain/Loss', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'UnrealizedGL', description: 'Summary of Unrealized GL Asset Accounts', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
     { accountId: 'UnrealizedPriceGL', description: 'Unrealized Price Gain/Loss', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'UnrecognizedDividendExpense', description: 'UnrecognizedDividendExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'UnrecognizedDividendReceipt', description: 'UnrecognizedDividendReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'UnrecognizedInterestExpense', description: 'UnrecognizedInterestExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'UnrecognizedInterestReceipt', description: 'UnrecognizedInterestReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
       { accountId: 'UnrecognizedReclaimTaxReceipt', description: 'UnrecognizedReclaimTaxReceipt', baseType: 'Revenue', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'UnrecognizedWithholdingTaxExpense', description: 'UnrecognizedWithholdingTaxExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'VAT', description: 'VAT', baseType: 'Expense', accountRole: 'Notational', accountClass: 'Monetary', accountSubType: 'Other' },
    { accountId: 'VMToMFXGL', description: 'VMToMFXGL', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'VMToMFXGLPeriodEnd', description: 'VMToMFXGLPeriodEnd', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'VMToMFXGLPeriodStart', description: 'VMToMFXGLPeriodStart', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'VMToMFXGLQuarterStart', description: 'VMToMFXGLQuarterStart', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'VMToMPriceGL', description: 'VMToMPriceGL', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'VMToMPriceGLPeriodEnd', description: 'VMToMPriceGLPeriodEnd', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
    { accountId: 'VMToMPriceGLPeriodStart', description: 'VMToMPriceGLPeriodStart', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
        { accountId: 'VMToMPriceGLQuarterStart', description: 'VMToMPriceGLQuarterStart', baseType: 'Revenue', accountRole: 'Virtual', accountClass: 'Monetary', accountSubType: 'GainLoss' },
         { accountId: 'WithheldPurchasedAI', description: 'WithheldPurchasedAI', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
     { accountId: 'WithheldSoldAI', description: 'WitheldSoldAI', baseType: 'Asset', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
        { accountId: 'WithholdingTaxExpense', description: 'WithholdingTaxExpense', baseType: 'Expense', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'RevExp' },
    { accountId: 'WithholdingTaxPayable', description: 'WithholdingTaxPayable', baseType: 'Liability', accountRole: 'Standard', accountClass: 'Monetary', accountSubType: 'Other' },
  ];

  for (const accountData of chartOfAccountsData) {
    await prisma.chartOfAccounts.create({
      data: accountData,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });