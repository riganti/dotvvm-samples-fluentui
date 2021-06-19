import { Observable } from '@microsoft/fast-element';

export function init() {
    ko.bindingHandlers["fast-bind"] = {
        init(element, valueAccessor, allBindings, viewModel, bindingContext) {
            const notifier = Observable.getNotifier(element);
            const value = ko.unwrap(valueAccessor()) || {};
            ko.utils.objectForEach(value,
                function (attrName, attrValue) {
                    notifier.subscribe({
                        handleChange(source, propertyName) {
                            const expr = (valueAccessor() || {})[attrName];
                            if (ko.isWritableObservable(expr)) {
                                expr(source[propertyName]);
                            }
                        }
                    },
                    attrName);
                });
        },
        update(element, valueAccessor, allBindings, viewModel, bindingContext) {
            const value = ko.unwrap(valueAccessor()) || {};
            ko.utils.objectForEach(value,
                function (attrName, attrValue) {
                    attrValue = ko.utils.unwrapObservable(attrValue);
                    element[attrName] = attrValue;
                });
        }
    }
}
