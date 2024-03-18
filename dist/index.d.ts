declare class MergnService {
    #private;
    private constructor();
    static getInstance(): MergnService;
    init(apiKey: string): void;
    setDebugLevel(debugLevel: number): void;
    recordAttribute(attributeName: string, attributeValue: string): void;
    login(identity: string): void;
    logout(): void;
    recordEvent(eventName: string, eventProperties?: {
        eventProperty: string;
        value: any;
    }[]): void;
}
declare const _default: MergnService;

export { _default as default };
