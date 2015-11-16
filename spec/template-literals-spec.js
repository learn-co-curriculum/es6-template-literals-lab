import { sentence1 } from '../src/template-literals';

describe('Template Literals', function () {

  it('can have variables interpolated into them', function () {
    expect(sentence1).toEqual('Fuzzy Wuzzy was a bear!');
  });

});