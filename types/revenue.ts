export type Metadata = {
    name: string;
    product_name: string;
};

export type Transaction = {
    type: string;
    metadata: Metadata;
    amount: string;
    date: Date;
    status: string;
};

export type Options = { name: string, value: string }
