type RecordDebugEventsToggle = {
    [event: string]: boolean;
};

interface InitOptions {
    swPath?: string;
    identity?: string;
    shopify?: boolean;
}

declare class MergnService {
    #private;
    private constructor();
    static getInstance(): MergnService;
    init(apiKey: string, options?: InitOptions): void;
    setDebugLevel(debugLevel: number, recordDebugEventsToggle?: RecordDebugEventsToggle): void;
    recordAttribute(attributeName: string, attributeValue: string): Promise<void>;
    login(identity: string): Promise<void>;
    logout(): void;
    recordEvent(eventName: string, eventProperties?: {
        eventProperty: string;
        value: string | number;
    }[]): Promise<void>;
    getVersion(): string;
}
declare const _default: MergnService;

export { _default as default };
