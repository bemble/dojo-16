/// <reference path="../references/tsd.d.ts" />
/// <reference path="../src/IConsoleExterne.ts" />

class ConsoleExterneMock implements IConsoleExterne {
    public readString:string = '';

    write(message?:any, ...optionalParams:any[]): void {
        console.log.apply(console, arguments);
    }

    read():string {
        return this.readString;
    }
}

describe('Application', () => {
    var consoleMock = new ConsoleExterneMock();

    beforeEach(() => {
        consoleMock.readString = '';
    });
});