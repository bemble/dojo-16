interface IConsoleExterne {
    write(message?:any, ...optionalParams:any[]): void;
    read():string;
}