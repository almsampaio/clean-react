import { randEmail, randGitCommitSha, randPassword } from '@ngneat/falso'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { AccountModel } from '@/domain/models/account-model'

export const mockAuthentication = (): AuthenticationParams => ({
  email: randEmail(),
  password: randPassword()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: randGitCommitSha()
})
