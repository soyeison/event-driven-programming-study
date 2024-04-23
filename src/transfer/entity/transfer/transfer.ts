export class Transfer {
  constructor(
    public accountIdFrom: string,
    public accountIdTo: string,
    public amount: number,
  ) {}
}
