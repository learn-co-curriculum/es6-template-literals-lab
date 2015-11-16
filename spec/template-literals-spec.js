import { sentence1 } from '../src/template-literals'

describe('Template Literals', () => {

  it('can have variables interpolated into them', () => {
    expect(sentence1).toEqual('Fuzzy Wuzzy was a bear!')
  })
  
})