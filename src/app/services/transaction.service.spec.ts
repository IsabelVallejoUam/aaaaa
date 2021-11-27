import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('list of transactions', () => {
    let transactions = service.getTransactions();
    expect(transactions.length).toBeGreaterThan(0);

  });
});
