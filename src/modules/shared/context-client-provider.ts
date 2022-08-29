import { Injectable, Optional, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST
})
export class ContextClientProvider {
  constructor(@Optional() private _clientId: string) {}

  getClientId(): string {
    if (!this._clientId) {
      throw new Error('Missing value');
    }
    return this._clientId;
  }

  setClientId(clientId: string): void {
    this._clientId = clientId;
  }
}