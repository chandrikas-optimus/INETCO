import { ILayout } from '../interfaces';
export class LayoutOptionsClass implements ILayout {
    name;
    title;
    options = [];
    addOptions(key, value) {
        this.options.push(key, value);
    }
}
