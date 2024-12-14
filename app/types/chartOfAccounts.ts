// types/chartOfAccounts.ts
export interface ChartOfAccounts {
    id: string;
    accountId: string;
    description: string;
    baseType: string;
    accountRole: string;
    accountClass: string;
    accountSubType: string;
    createdAt: Date;
    createdBy: string | null;
    updatedAt: Date;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
}