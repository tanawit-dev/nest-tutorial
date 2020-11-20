import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './role.entity';

@Crud({
  model: {
    type: Role,
  },
})
@Controller('roles')
export class RolesController {
  constructor(private readonly service: RolesService) {}
}
