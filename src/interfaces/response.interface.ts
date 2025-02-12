export interface WithPagination<T> {
    rows: T[];
    count: number;
    page: number;
    perPage: number;
    pages: number;
}

export interface SuccessResponseIn<T> {
    code: number;
    status: true;
    message: string;
    data: T;
}

export interface ErrorResponseInterface {
    code: number;
    status: false;
    message: string;
}

export type ResponseInterface<T> = SuccessResponseIn<T> | ErrorResponseInterface;

export default ResponseInterface;
