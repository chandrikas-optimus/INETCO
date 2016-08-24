export interface ILayout {
    name: string;
    title: string;
    options: any;
    addOptions(key: number, value: string): void;
}
