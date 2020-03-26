import { LibroDto } from './libro-dto';

describe('Libro', () => {
  it('should be defined', () => {
    expect(new LibroDto()).toBeDefined();
  });
});
