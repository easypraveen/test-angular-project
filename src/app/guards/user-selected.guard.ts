import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { inject } from '@angular/core';

export const userSelectedGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router)

  if(userService.getSelectedUserValue()) {
    return true;
  } else {
    router.navigate(['/users'])
    return false;
  }
  
};
