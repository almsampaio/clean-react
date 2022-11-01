import { randEmail, randPassword } from '@ngneat/falso'
import { AuthenticationParams } from '@/domain/usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: randEmail(),
  password: randPassword()
})
