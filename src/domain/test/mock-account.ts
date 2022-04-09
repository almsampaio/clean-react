import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { randEmail, randGitCommitSha, randPassword } from '@ngneat/falso'

export const mockAuthentication = (): AuthenticationParams => ({
  email: randEmail(),
  password: randPassword()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: randGitCommitSha()
})
