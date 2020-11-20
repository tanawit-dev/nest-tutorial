import { Product } from './product.entity';
import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: { type: Product },
})
@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}
}
