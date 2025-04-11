
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MovieGender
 * 
 */
export type MovieGender = $Result.DefaultSelection<Prisma.$MovieGenderPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model MovieList
 * 
 */
export type MovieList = $Result.DefaultSelection<Prisma.$MovieListPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieGender`: Exposes CRUD operations for the **MovieGender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieGenders
    * const movieGenders = await prisma.movieGender.findMany()
    * ```
    */
  get movieGender(): Prisma.MovieGenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieList`: Exposes CRUD operations for the **MovieList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieLists
    * const movieLists = await prisma.movieList.findMany()
    * ```
    */
  get movieList(): Prisma.MovieListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MovieGender: 'MovieGender',
    Movie: 'Movie',
    MovieList: 'MovieList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "movieGender" | "movie" | "movieList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MovieGender: {
        payload: Prisma.$MovieGenderPayload<ExtArgs>
        fields: Prisma.MovieGenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieGenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieGenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>
          }
          findFirst: {
            args: Prisma.MovieGenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieGenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>
          }
          findMany: {
            args: Prisma.MovieGenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>[]
          }
          create: {
            args: Prisma.MovieGenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>
          }
          createMany: {
            args: Prisma.MovieGenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieGenderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>[]
          }
          delete: {
            args: Prisma.MovieGenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>
          }
          update: {
            args: Prisma.MovieGenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>
          }
          deleteMany: {
            args: Prisma.MovieGenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieGenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieGenderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>[]
          }
          upsert: {
            args: Prisma.MovieGenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenderPayload>
          }
          aggregate: {
            args: Prisma.MovieGenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieGender>
          }
          groupBy: {
            args: Prisma.MovieGenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieGenderCountArgs<ExtArgs>
            result: $Utils.Optional<MovieGenderCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      MovieList: {
        payload: Prisma.$MovieListPayload<ExtArgs>
        fields: Prisma.MovieListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>
          }
          findFirst: {
            args: Prisma.MovieListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>
          }
          findMany: {
            args: Prisma.MovieListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>[]
          }
          create: {
            args: Prisma.MovieListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>
          }
          createMany: {
            args: Prisma.MovieListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>[]
          }
          delete: {
            args: Prisma.MovieListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>
          }
          update: {
            args: Prisma.MovieListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>
          }
          deleteMany: {
            args: Prisma.MovieListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>[]
          }
          upsert: {
            args: Prisma.MovieListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieListPayload>
          }
          aggregate: {
            args: Prisma.MovieListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieList>
          }
          groupBy: {
            args: Prisma.MovieListGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieListGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieListCountArgs<ExtArgs>
            result: $Utils.Optional<MovieListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    movieGender?: MovieGenderOmit
    movie?: MovieOmit
    movieList?: MovieListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    lists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | UserCountOutputTypeCountListsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieListWhereInput
  }


  /**
   * Count Type MovieGenderCountOutputType
   */

  export type MovieGenderCountOutputType = {
    movies: number
  }

  export type MovieGenderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieGenderCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * MovieGenderCountOutputType without action
   */
  export type MovieGenderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenderCountOutputType
     */
    select?: MovieGenderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieGenderCountOutputType without action
   */
  export type MovieGenderCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    genders: number
    lists: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genders?: boolean | MovieCountOutputTypeCountGendersArgs
    lists?: boolean | MovieCountOutputTypeCountListsArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountGendersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenderWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieListWhereInput
  }


  /**
   * Count Type MovieListCountOutputType
   */

  export type MovieListCountOutputType = {
    movies: number
  }

  export type MovieListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieListCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * MovieListCountOutputType without action
   */
  export type MovieListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieListCountOutputType
     */
    select?: MovieListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieListCountOutputType without action
   */
  export type MovieListCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    lists?: boolean | User$listsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | User$listsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lists: Prisma.$MovieListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lists<T extends User$listsArgs<ExtArgs> = {}>(args?: Subset<T, User$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.lists
   */
  export type User$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    where?: MovieListWhereInput
    orderBy?: MovieListOrderByWithRelationInput | MovieListOrderByWithRelationInput[]
    cursor?: MovieListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MovieGender
   */

  export type AggregateMovieGender = {
    _count: MovieGenderCountAggregateOutputType | null
    _min: MovieGenderMinAggregateOutputType | null
    _max: MovieGenderMaxAggregateOutputType | null
  }

  export type MovieGenderMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MovieGenderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MovieGenderCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type MovieGenderMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MovieGenderMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MovieGenderCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type MovieGenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGender to aggregate.
     */
    where?: MovieGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenders to fetch.
     */
    orderBy?: MovieGenderOrderByWithRelationInput | MovieGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieGenders
    **/
    _count?: true | MovieGenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieGenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieGenderMaxAggregateInputType
  }

  export type GetMovieGenderAggregateType<T extends MovieGenderAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieGender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieGender[P]>
      : GetScalarType<T[P], AggregateMovieGender[P]>
  }




  export type MovieGenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenderWhereInput
    orderBy?: MovieGenderOrderByWithAggregationInput | MovieGenderOrderByWithAggregationInput[]
    by: MovieGenderScalarFieldEnum[] | MovieGenderScalarFieldEnum
    having?: MovieGenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieGenderCountAggregateInputType | true
    _min?: MovieGenderMinAggregateInputType
    _max?: MovieGenderMaxAggregateInputType
  }

  export type MovieGenderGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: MovieGenderCountAggregateOutputType | null
    _min: MovieGenderMinAggregateOutputType | null
    _max: MovieGenderMaxAggregateOutputType | null
  }

  type GetMovieGenderGroupByPayload<T extends MovieGenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGenderGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGenderGroupByOutputType[P]>
        }
      >
    >


  export type MovieGenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    movies?: boolean | MovieGender$moviesArgs<ExtArgs>
    _count?: boolean | MovieGenderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieGender"]>

  export type MovieGenderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["movieGender"]>

  export type MovieGenderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["movieGender"]>

  export type MovieGenderSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type MovieGenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["movieGender"]>
  export type MovieGenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieGender$moviesArgs<ExtArgs>
    _count?: boolean | MovieGenderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieGenderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MovieGenderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MovieGenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieGender"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["movieGender"]>
    composites: {}
  }

  type MovieGenderGetPayload<S extends boolean | null | undefined | MovieGenderDefaultArgs> = $Result.GetResult<Prisma.$MovieGenderPayload, S>

  type MovieGenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieGenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieGenderCountAggregateInputType | true
    }

  export interface MovieGenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieGender'], meta: { name: 'MovieGender' } }
    /**
     * Find zero or one MovieGender that matches the filter.
     * @param {MovieGenderFindUniqueArgs} args - Arguments to find a MovieGender
     * @example
     * // Get one MovieGender
     * const movieGender = await prisma.movieGender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieGenderFindUniqueArgs>(args: SelectSubset<T, MovieGenderFindUniqueArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieGender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieGenderFindUniqueOrThrowArgs} args - Arguments to find a MovieGender
     * @example
     * // Get one MovieGender
     * const movieGender = await prisma.movieGender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieGenderFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieGenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieGender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenderFindFirstArgs} args - Arguments to find a MovieGender
     * @example
     * // Get one MovieGender
     * const movieGender = await prisma.movieGender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieGenderFindFirstArgs>(args?: SelectSubset<T, MovieGenderFindFirstArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieGender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenderFindFirstOrThrowArgs} args - Arguments to find a MovieGender
     * @example
     * // Get one MovieGender
     * const movieGender = await prisma.movieGender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieGenderFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieGenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieGenders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieGenders
     * const movieGenders = await prisma.movieGender.findMany()
     * 
     * // Get first 10 MovieGenders
     * const movieGenders = await prisma.movieGender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieGenderWithIdOnly = await prisma.movieGender.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieGenderFindManyArgs>(args?: SelectSubset<T, MovieGenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieGender.
     * @param {MovieGenderCreateArgs} args - Arguments to create a MovieGender.
     * @example
     * // Create one MovieGender
     * const MovieGender = await prisma.movieGender.create({
     *   data: {
     *     // ... data to create a MovieGender
     *   }
     * })
     * 
     */
    create<T extends MovieGenderCreateArgs>(args: SelectSubset<T, MovieGenderCreateArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieGenders.
     * @param {MovieGenderCreateManyArgs} args - Arguments to create many MovieGenders.
     * @example
     * // Create many MovieGenders
     * const movieGender = await prisma.movieGender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieGenderCreateManyArgs>(args?: SelectSubset<T, MovieGenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieGenders and returns the data saved in the database.
     * @param {MovieGenderCreateManyAndReturnArgs} args - Arguments to create many MovieGenders.
     * @example
     * // Create many MovieGenders
     * const movieGender = await prisma.movieGender.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieGenders and only return the `id`
     * const movieGenderWithIdOnly = await prisma.movieGender.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieGenderCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieGenderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieGender.
     * @param {MovieGenderDeleteArgs} args - Arguments to delete one MovieGender.
     * @example
     * // Delete one MovieGender
     * const MovieGender = await prisma.movieGender.delete({
     *   where: {
     *     // ... filter to delete one MovieGender
     *   }
     * })
     * 
     */
    delete<T extends MovieGenderDeleteArgs>(args: SelectSubset<T, MovieGenderDeleteArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieGender.
     * @param {MovieGenderUpdateArgs} args - Arguments to update one MovieGender.
     * @example
     * // Update one MovieGender
     * const movieGender = await prisma.movieGender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieGenderUpdateArgs>(args: SelectSubset<T, MovieGenderUpdateArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieGenders.
     * @param {MovieGenderDeleteManyArgs} args - Arguments to filter MovieGenders to delete.
     * @example
     * // Delete a few MovieGenders
     * const { count } = await prisma.movieGender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieGenderDeleteManyArgs>(args?: SelectSubset<T, MovieGenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieGenders
     * const movieGender = await prisma.movieGender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieGenderUpdateManyArgs>(args: SelectSubset<T, MovieGenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenders and returns the data updated in the database.
     * @param {MovieGenderUpdateManyAndReturnArgs} args - Arguments to update many MovieGenders.
     * @example
     * // Update many MovieGenders
     * const movieGender = await prisma.movieGender.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieGenders and only return the `id`
     * const movieGenderWithIdOnly = await prisma.movieGender.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieGenderUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieGenderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieGender.
     * @param {MovieGenderUpsertArgs} args - Arguments to update or create a MovieGender.
     * @example
     * // Update or create a MovieGender
     * const movieGender = await prisma.movieGender.upsert({
     *   create: {
     *     // ... data to create a MovieGender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieGender we want to update
     *   }
     * })
     */
    upsert<T extends MovieGenderUpsertArgs>(args: SelectSubset<T, MovieGenderUpsertArgs<ExtArgs>>): Prisma__MovieGenderClient<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieGenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenderCountArgs} args - Arguments to filter MovieGenders to count.
     * @example
     * // Count the number of MovieGenders
     * const count = await prisma.movieGender.count({
     *   where: {
     *     // ... the filter for the MovieGenders we want to count
     *   }
     * })
    **/
    count<T extends MovieGenderCountArgs>(
      args?: Subset<T, MovieGenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieGenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieGender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieGenderAggregateArgs>(args: Subset<T, MovieGenderAggregateArgs>): Prisma.PrismaPromise<GetMovieGenderAggregateType<T>>

    /**
     * Group by MovieGender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGenderGroupByArgs['orderBy'] }
        : { orderBy?: MovieGenderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieGender model
   */
  readonly fields: MovieGenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieGender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieGenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends MovieGender$moviesArgs<ExtArgs> = {}>(args?: Subset<T, MovieGender$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieGender model
   */
  interface MovieGenderFieldRefs {
    readonly id: FieldRef<"MovieGender", 'String'>
    readonly name: FieldRef<"MovieGender", 'String'>
    readonly description: FieldRef<"MovieGender", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovieGender findUnique
   */
  export type MovieGenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * Filter, which MovieGender to fetch.
     */
    where: MovieGenderWhereUniqueInput
  }

  /**
   * MovieGender findUniqueOrThrow
   */
  export type MovieGenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * Filter, which MovieGender to fetch.
     */
    where: MovieGenderWhereUniqueInput
  }

  /**
   * MovieGender findFirst
   */
  export type MovieGenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * Filter, which MovieGender to fetch.
     */
    where?: MovieGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenders to fetch.
     */
    orderBy?: MovieGenderOrderByWithRelationInput | MovieGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenders.
     */
    cursor?: MovieGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenders.
     */
    distinct?: MovieGenderScalarFieldEnum | MovieGenderScalarFieldEnum[]
  }

  /**
   * MovieGender findFirstOrThrow
   */
  export type MovieGenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * Filter, which MovieGender to fetch.
     */
    where?: MovieGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenders to fetch.
     */
    orderBy?: MovieGenderOrderByWithRelationInput | MovieGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenders.
     */
    cursor?: MovieGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenders.
     */
    distinct?: MovieGenderScalarFieldEnum | MovieGenderScalarFieldEnum[]
  }

  /**
   * MovieGender findMany
   */
  export type MovieGenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenders to fetch.
     */
    where?: MovieGenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenders to fetch.
     */
    orderBy?: MovieGenderOrderByWithRelationInput | MovieGenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieGenders.
     */
    cursor?: MovieGenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenders.
     */
    skip?: number
    distinct?: MovieGenderScalarFieldEnum | MovieGenderScalarFieldEnum[]
  }

  /**
   * MovieGender create
   */
  export type MovieGenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieGender.
     */
    data: XOR<MovieGenderCreateInput, MovieGenderUncheckedCreateInput>
  }

  /**
   * MovieGender createMany
   */
  export type MovieGenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieGenders.
     */
    data: MovieGenderCreateManyInput | MovieGenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieGender createManyAndReturn
   */
  export type MovieGenderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * The data used to create many MovieGenders.
     */
    data: MovieGenderCreateManyInput | MovieGenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieGender update
   */
  export type MovieGenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieGender.
     */
    data: XOR<MovieGenderUpdateInput, MovieGenderUncheckedUpdateInput>
    /**
     * Choose, which MovieGender to update.
     */
    where: MovieGenderWhereUniqueInput
  }

  /**
   * MovieGender updateMany
   */
  export type MovieGenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieGenders.
     */
    data: XOR<MovieGenderUpdateManyMutationInput, MovieGenderUncheckedUpdateManyInput>
    /**
     * Filter which MovieGenders to update
     */
    where?: MovieGenderWhereInput
    /**
     * Limit how many MovieGenders to update.
     */
    limit?: number
  }

  /**
   * MovieGender updateManyAndReturn
   */
  export type MovieGenderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * The data used to update MovieGenders.
     */
    data: XOR<MovieGenderUpdateManyMutationInput, MovieGenderUncheckedUpdateManyInput>
    /**
     * Filter which MovieGenders to update
     */
    where?: MovieGenderWhereInput
    /**
     * Limit how many MovieGenders to update.
     */
    limit?: number
  }

  /**
   * MovieGender upsert
   */
  export type MovieGenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieGender to update in case it exists.
     */
    where: MovieGenderWhereUniqueInput
    /**
     * In case the MovieGender found by the `where` argument doesn't exist, create a new MovieGender with this data.
     */
    create: XOR<MovieGenderCreateInput, MovieGenderUncheckedCreateInput>
    /**
     * In case the MovieGender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieGenderUpdateInput, MovieGenderUncheckedUpdateInput>
  }

  /**
   * MovieGender delete
   */
  export type MovieGenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    /**
     * Filter which MovieGender to delete.
     */
    where: MovieGenderWhereUniqueInput
  }

  /**
   * MovieGender deleteMany
   */
  export type MovieGenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGenders to delete
     */
    where?: MovieGenderWhereInput
    /**
     * Limit how many MovieGenders to delete.
     */
    limit?: number
  }

  /**
   * MovieGender.movies
   */
  export type MovieGender$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * MovieGender without action
   */
  export type MovieGenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    ageRestriction: number | null
  }

  export type MovieSumAggregateOutputType = {
    ageRestriction: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    name: string | null
    ageRestriction: number | null
    sinopsis: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ageRestriction: number | null
    sinopsis: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    name: number
    ageRestriction: number
    sinopsis: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    ageRestriction?: true
  }

  export type MovieSumAggregateInputType = {
    ageRestriction?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    name?: true
    ageRestriction?: true
    sinopsis?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    name?: true
    ageRestriction?: true
    sinopsis?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    name?: true
    ageRestriction?: true
    sinopsis?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    name: string
    ageRestriction: number | null
    sinopsis: string
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ageRestriction?: boolean
    sinopsis?: boolean
    genders?: boolean | Movie$gendersArgs<ExtArgs>
    lists?: boolean | Movie$listsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ageRestriction?: boolean
    sinopsis?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ageRestriction?: boolean
    sinopsis?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    name?: boolean
    ageRestriction?: boolean
    sinopsis?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ageRestriction" | "sinopsis", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genders?: boolean | Movie$gendersArgs<ExtArgs>
    lists?: boolean | Movie$listsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      genders: Prisma.$MovieGenderPayload<ExtArgs>[]
      lists: Prisma.$MovieListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ageRestriction: number | null
      sinopsis: string
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MovieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genders<T extends Movie$gendersArgs<ExtArgs> = {}>(args?: Subset<T, Movie$gendersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lists<T extends Movie$listsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly name: FieldRef<"Movie", 'String'>
    readonly ageRestriction: FieldRef<"Movie", 'Int'>
    readonly sinopsis: FieldRef<"Movie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie updateManyAndReturn
   */
  export type MovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.genders
   */
  export type Movie$gendersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGender
     */
    select?: MovieGenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGender
     */
    omit?: MovieGenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenderInclude<ExtArgs> | null
    where?: MovieGenderWhereInput
    orderBy?: MovieGenderOrderByWithRelationInput | MovieGenderOrderByWithRelationInput[]
    cursor?: MovieGenderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenderScalarFieldEnum | MovieGenderScalarFieldEnum[]
  }

  /**
   * Movie.lists
   */
  export type Movie$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    where?: MovieListWhereInput
    orderBy?: MovieListOrderByWithRelationInput | MovieListOrderByWithRelationInput[]
    cursor?: MovieListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model MovieList
   */

  export type AggregateMovieList = {
    _count: MovieListCountAggregateOutputType | null
    _min: MovieListMinAggregateOutputType | null
    _max: MovieListMaxAggregateOutputType | null
  }

  export type MovieListMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    public: boolean | null
    userId: string | null
  }

  export type MovieListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    public: boolean | null
    userId: string | null
  }

  export type MovieListCountAggregateOutputType = {
    id: number
    name: number
    description: number
    public: number
    userId: number
    _all: number
  }


  export type MovieListMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    public?: true
    userId?: true
  }

  export type MovieListMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    public?: true
    userId?: true
  }

  export type MovieListCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    public?: true
    userId?: true
    _all?: true
  }

  export type MovieListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieList to aggregate.
     */
    where?: MovieListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLists to fetch.
     */
    orderBy?: MovieListOrderByWithRelationInput | MovieListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieLists
    **/
    _count?: true | MovieListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieListMaxAggregateInputType
  }

  export type GetMovieListAggregateType<T extends MovieListAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieList[P]>
      : GetScalarType<T[P], AggregateMovieList[P]>
  }




  export type MovieListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieListWhereInput
    orderBy?: MovieListOrderByWithAggregationInput | MovieListOrderByWithAggregationInput[]
    by: MovieListScalarFieldEnum[] | MovieListScalarFieldEnum
    having?: MovieListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieListCountAggregateInputType | true
    _min?: MovieListMinAggregateInputType
    _max?: MovieListMaxAggregateInputType
  }

  export type MovieListGroupByOutputType = {
    id: string
    name: string
    description: string
    public: boolean
    userId: string
    _count: MovieListCountAggregateOutputType | null
    _min: MovieListMinAggregateOutputType | null
    _max: MovieListMaxAggregateOutputType | null
  }

  type GetMovieListGroupByPayload<T extends MovieListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieListGroupByOutputType[P]>
            : GetScalarType<T[P], MovieListGroupByOutputType[P]>
        }
      >
    >


  export type MovieListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    public?: boolean
    userId?: boolean
    movies?: boolean | MovieList$moviesArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MovieListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieList"]>

  export type MovieListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    public?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieList"]>

  export type MovieListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    public?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieList"]>

  export type MovieListSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    public?: boolean
    userId?: boolean
  }

  export type MovieListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "public" | "userId", ExtArgs["result"]["movieList"]>
  export type MovieListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieList$moviesArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MovieListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MovieListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MovieListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieList"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      public: boolean
      userId: string
    }, ExtArgs["result"]["movieList"]>
    composites: {}
  }

  type MovieListGetPayload<S extends boolean | null | undefined | MovieListDefaultArgs> = $Result.GetResult<Prisma.$MovieListPayload, S>

  type MovieListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieListCountAggregateInputType | true
    }

  export interface MovieListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieList'], meta: { name: 'MovieList' } }
    /**
     * Find zero or one MovieList that matches the filter.
     * @param {MovieListFindUniqueArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieListFindUniqueArgs>(args: SelectSubset<T, MovieListFindUniqueArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieListFindUniqueOrThrowArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieListFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListFindFirstArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieListFindFirstArgs>(args?: SelectSubset<T, MovieListFindFirstArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListFindFirstOrThrowArgs} args - Arguments to find a MovieList
     * @example
     * // Get one MovieList
     * const movieList = await prisma.movieList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieListFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieListFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieLists
     * const movieLists = await prisma.movieList.findMany()
     * 
     * // Get first 10 MovieLists
     * const movieLists = await prisma.movieList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieListWithIdOnly = await prisma.movieList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieListFindManyArgs>(args?: SelectSubset<T, MovieListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieList.
     * @param {MovieListCreateArgs} args - Arguments to create a MovieList.
     * @example
     * // Create one MovieList
     * const MovieList = await prisma.movieList.create({
     *   data: {
     *     // ... data to create a MovieList
     *   }
     * })
     * 
     */
    create<T extends MovieListCreateArgs>(args: SelectSubset<T, MovieListCreateArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieLists.
     * @param {MovieListCreateManyArgs} args - Arguments to create many MovieLists.
     * @example
     * // Create many MovieLists
     * const movieList = await prisma.movieList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieListCreateManyArgs>(args?: SelectSubset<T, MovieListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieLists and returns the data saved in the database.
     * @param {MovieListCreateManyAndReturnArgs} args - Arguments to create many MovieLists.
     * @example
     * // Create many MovieLists
     * const movieList = await prisma.movieList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieLists and only return the `id`
     * const movieListWithIdOnly = await prisma.movieList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieListCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieList.
     * @param {MovieListDeleteArgs} args - Arguments to delete one MovieList.
     * @example
     * // Delete one MovieList
     * const MovieList = await prisma.movieList.delete({
     *   where: {
     *     // ... filter to delete one MovieList
     *   }
     * })
     * 
     */
    delete<T extends MovieListDeleteArgs>(args: SelectSubset<T, MovieListDeleteArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieList.
     * @param {MovieListUpdateArgs} args - Arguments to update one MovieList.
     * @example
     * // Update one MovieList
     * const movieList = await prisma.movieList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieListUpdateArgs>(args: SelectSubset<T, MovieListUpdateArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieLists.
     * @param {MovieListDeleteManyArgs} args - Arguments to filter MovieLists to delete.
     * @example
     * // Delete a few MovieLists
     * const { count } = await prisma.movieList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieListDeleteManyArgs>(args?: SelectSubset<T, MovieListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieLists
     * const movieList = await prisma.movieList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieListUpdateManyArgs>(args: SelectSubset<T, MovieListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieLists and returns the data updated in the database.
     * @param {MovieListUpdateManyAndReturnArgs} args - Arguments to update many MovieLists.
     * @example
     * // Update many MovieLists
     * const movieList = await prisma.movieList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieLists and only return the `id`
     * const movieListWithIdOnly = await prisma.movieList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieListUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieList.
     * @param {MovieListUpsertArgs} args - Arguments to update or create a MovieList.
     * @example
     * // Update or create a MovieList
     * const movieList = await prisma.movieList.upsert({
     *   create: {
     *     // ... data to create a MovieList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieList we want to update
     *   }
     * })
     */
    upsert<T extends MovieListUpsertArgs>(args: SelectSubset<T, MovieListUpsertArgs<ExtArgs>>): Prisma__MovieListClient<$Result.GetResult<Prisma.$MovieListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListCountArgs} args - Arguments to filter MovieLists to count.
     * @example
     * // Count the number of MovieLists
     * const count = await prisma.movieList.count({
     *   where: {
     *     // ... the filter for the MovieLists we want to count
     *   }
     * })
    **/
    count<T extends MovieListCountArgs>(
      args?: Subset<T, MovieListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieListAggregateArgs>(args: Subset<T, MovieListAggregateArgs>): Prisma.PrismaPromise<GetMovieListAggregateType<T>>

    /**
     * Group by MovieList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieListGroupByArgs['orderBy'] }
        : { orderBy?: MovieListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieList model
   */
  readonly fields: MovieListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends MovieList$moviesArgs<ExtArgs> = {}>(args?: Subset<T, MovieList$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieList model
   */
  interface MovieListFieldRefs {
    readonly id: FieldRef<"MovieList", 'String'>
    readonly name: FieldRef<"MovieList", 'String'>
    readonly description: FieldRef<"MovieList", 'String'>
    readonly public: FieldRef<"MovieList", 'Boolean'>
    readonly userId: FieldRef<"MovieList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovieList findUnique
   */
  export type MovieListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * Filter, which MovieList to fetch.
     */
    where: MovieListWhereUniqueInput
  }

  /**
   * MovieList findUniqueOrThrow
   */
  export type MovieListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * Filter, which MovieList to fetch.
     */
    where: MovieListWhereUniqueInput
  }

  /**
   * MovieList findFirst
   */
  export type MovieListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * Filter, which MovieList to fetch.
     */
    where?: MovieListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLists to fetch.
     */
    orderBy?: MovieListOrderByWithRelationInput | MovieListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieLists.
     */
    cursor?: MovieListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieLists.
     */
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[]
  }

  /**
   * MovieList findFirstOrThrow
   */
  export type MovieListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * Filter, which MovieList to fetch.
     */
    where?: MovieListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLists to fetch.
     */
    orderBy?: MovieListOrderByWithRelationInput | MovieListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieLists.
     */
    cursor?: MovieListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieLists.
     */
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[]
  }

  /**
   * MovieList findMany
   */
  export type MovieListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * Filter, which MovieLists to fetch.
     */
    where?: MovieListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLists to fetch.
     */
    orderBy?: MovieListOrderByWithRelationInput | MovieListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieLists.
     */
    cursor?: MovieListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLists.
     */
    skip?: number
    distinct?: MovieListScalarFieldEnum | MovieListScalarFieldEnum[]
  }

  /**
   * MovieList create
   */
  export type MovieListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieList.
     */
    data: XOR<MovieListCreateInput, MovieListUncheckedCreateInput>
  }

  /**
   * MovieList createMany
   */
  export type MovieListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieLists.
     */
    data: MovieListCreateManyInput | MovieListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieList createManyAndReturn
   */
  export type MovieListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * The data used to create many MovieLists.
     */
    data: MovieListCreateManyInput | MovieListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieList update
   */
  export type MovieListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieList.
     */
    data: XOR<MovieListUpdateInput, MovieListUncheckedUpdateInput>
    /**
     * Choose, which MovieList to update.
     */
    where: MovieListWhereUniqueInput
  }

  /**
   * MovieList updateMany
   */
  export type MovieListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieLists.
     */
    data: XOR<MovieListUpdateManyMutationInput, MovieListUncheckedUpdateManyInput>
    /**
     * Filter which MovieLists to update
     */
    where?: MovieListWhereInput
    /**
     * Limit how many MovieLists to update.
     */
    limit?: number
  }

  /**
   * MovieList updateManyAndReturn
   */
  export type MovieListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * The data used to update MovieLists.
     */
    data: XOR<MovieListUpdateManyMutationInput, MovieListUncheckedUpdateManyInput>
    /**
     * Filter which MovieLists to update
     */
    where?: MovieListWhereInput
    /**
     * Limit how many MovieLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieList upsert
   */
  export type MovieListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieList to update in case it exists.
     */
    where: MovieListWhereUniqueInput
    /**
     * In case the MovieList found by the `where` argument doesn't exist, create a new MovieList with this data.
     */
    create: XOR<MovieListCreateInput, MovieListUncheckedCreateInput>
    /**
     * In case the MovieList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieListUpdateInput, MovieListUncheckedUpdateInput>
  }

  /**
   * MovieList delete
   */
  export type MovieListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
    /**
     * Filter which MovieList to delete.
     */
    where: MovieListWhereUniqueInput
  }

  /**
   * MovieList deleteMany
   */
  export type MovieListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieLists to delete
     */
    where?: MovieListWhereInput
    /**
     * Limit how many MovieLists to delete.
     */
    limit?: number
  }

  /**
   * MovieList.movies
   */
  export type MovieList$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * MovieList without action
   */
  export type MovieListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieList
     */
    select?: MovieListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieList
     */
    omit?: MovieListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieListInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MovieGenderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type MovieGenderScalarFieldEnum = (typeof MovieGenderScalarFieldEnum)[keyof typeof MovieGenderScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ageRestriction: 'ageRestriction',
    sinopsis: 'sinopsis'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const MovieListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    public: 'public',
    userId: 'userId'
  };

  export type MovieListScalarFieldEnum = (typeof MovieListScalarFieldEnum)[keyof typeof MovieListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    lists?: MovieListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    lists?: MovieListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    lists?: MovieListListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type MovieGenderWhereInput = {
    AND?: MovieGenderWhereInput | MovieGenderWhereInput[]
    OR?: MovieGenderWhereInput[]
    NOT?: MovieGenderWhereInput | MovieGenderWhereInput[]
    id?: StringFilter<"MovieGender"> | string
    name?: StringFilter<"MovieGender"> | string
    description?: StringFilter<"MovieGender"> | string
    movies?: MovieListRelationFilter
  }

  export type MovieGenderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
  }

  export type MovieGenderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MovieGenderWhereInput | MovieGenderWhereInput[]
    OR?: MovieGenderWhereInput[]
    NOT?: MovieGenderWhereInput | MovieGenderWhereInput[]
    description?: StringFilter<"MovieGender"> | string
    movies?: MovieListRelationFilter
  }, "id" | "name">

  export type MovieGenderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: MovieGenderCountOrderByAggregateInput
    _max?: MovieGenderMaxOrderByAggregateInput
    _min?: MovieGenderMinOrderByAggregateInput
  }

  export type MovieGenderScalarWhereWithAggregatesInput = {
    AND?: MovieGenderScalarWhereWithAggregatesInput | MovieGenderScalarWhereWithAggregatesInput[]
    OR?: MovieGenderScalarWhereWithAggregatesInput[]
    NOT?: MovieGenderScalarWhereWithAggregatesInput | MovieGenderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovieGender"> | string
    name?: StringWithAggregatesFilter<"MovieGender"> | string
    description?: StringWithAggregatesFilter<"MovieGender"> | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: StringFilter<"Movie"> | string
    name?: StringFilter<"Movie"> | string
    ageRestriction?: IntNullableFilter<"Movie"> | number | null
    sinopsis?: StringFilter<"Movie"> | string
    genders?: MovieGenderListRelationFilter
    lists?: MovieListListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ageRestriction?: SortOrderInput | SortOrder
    sinopsis?: SortOrder
    genders?: MovieGenderOrderByRelationAggregateInput
    lists?: MovieListOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    name?: StringFilter<"Movie"> | string
    ageRestriction?: IntNullableFilter<"Movie"> | number | null
    sinopsis?: StringFilter<"Movie"> | string
    genders?: MovieGenderListRelationFilter
    lists?: MovieListListRelationFilter
  }, "id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ageRestriction?: SortOrderInput | SortOrder
    sinopsis?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie"> | string
    name?: StringWithAggregatesFilter<"Movie"> | string
    ageRestriction?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    sinopsis?: StringWithAggregatesFilter<"Movie"> | string
  }

  export type MovieListWhereInput = {
    AND?: MovieListWhereInput | MovieListWhereInput[]
    OR?: MovieListWhereInput[]
    NOT?: MovieListWhereInput | MovieListWhereInput[]
    id?: StringFilter<"MovieList"> | string
    name?: StringFilter<"MovieList"> | string
    description?: StringFilter<"MovieList"> | string
    public?: BoolFilter<"MovieList"> | boolean
    userId?: StringFilter<"MovieList"> | string
    movies?: MovieListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MovieListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    userId?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type MovieListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovieListWhereInput | MovieListWhereInput[]
    OR?: MovieListWhereInput[]
    NOT?: MovieListWhereInput | MovieListWhereInput[]
    name?: StringFilter<"MovieList"> | string
    description?: StringFilter<"MovieList"> | string
    public?: BoolFilter<"MovieList"> | boolean
    userId?: StringFilter<"MovieList"> | string
    movies?: MovieListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MovieListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    userId?: SortOrder
    _count?: MovieListCountOrderByAggregateInput
    _max?: MovieListMaxOrderByAggregateInput
    _min?: MovieListMinOrderByAggregateInput
  }

  export type MovieListScalarWhereWithAggregatesInput = {
    AND?: MovieListScalarWhereWithAggregatesInput | MovieListScalarWhereWithAggregatesInput[]
    OR?: MovieListScalarWhereWithAggregatesInput[]
    NOT?: MovieListScalarWhereWithAggregatesInput | MovieListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovieList"> | string
    name?: StringWithAggregatesFilter<"MovieList"> | string
    description?: StringWithAggregatesFilter<"MovieList"> | string
    public?: BoolWithAggregatesFilter<"MovieList"> | boolean
    userId?: StringWithAggregatesFilter<"MovieList"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    lists?: MovieListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    lists?: MovieListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lists?: MovieListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lists?: MovieListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenderCreateInput = {
    id?: string
    name: string
    description: string
    movies?: MovieCreateNestedManyWithoutGendersInput
  }

  export type MovieGenderUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    movies?: MovieUncheckedCreateNestedManyWithoutGendersInput
  }

  export type MovieGenderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movies?: MovieUpdateManyWithoutGendersNestedInput
  }

  export type MovieGenderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movies?: MovieUncheckedUpdateManyWithoutGendersNestedInput
  }

  export type MovieGenderCreateManyInput = {
    id?: string
    name: string
    description: string
  }

  export type MovieGenderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    id?: string
    name: string
    ageRestriction?: number | null
    sinopsis: string
    genders?: MovieGenderCreateNestedManyWithoutMoviesInput
    lists?: MovieListCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    name: string
    ageRestriction?: number | null
    sinopsis: string
    genders?: MovieGenderUncheckedCreateNestedManyWithoutMoviesInput
    lists?: MovieListUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
    genders?: MovieGenderUpdateManyWithoutMoviesNestedInput
    lists?: MovieListUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
    genders?: MovieGenderUncheckedUpdateManyWithoutMoviesNestedInput
    lists?: MovieListUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MovieCreateManyInput = {
    id?: string
    name: string
    ageRestriction?: number | null
    sinopsis: string
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
  }

  export type MovieListCreateInput = {
    id?: string
    name: string
    description: string
    public?: boolean
    movies?: MovieCreateNestedManyWithoutListsInput
    User: UserCreateNestedOneWithoutListsInput
  }

  export type MovieListUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    public?: boolean
    userId: string
    movies?: MovieUncheckedCreateNestedManyWithoutListsInput
  }

  export type MovieListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    movies?: MovieUpdateManyWithoutListsNestedInput
    User?: UserUpdateOneRequiredWithoutListsNestedInput
  }

  export type MovieListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    movies?: MovieUncheckedUpdateManyWithoutListsNestedInput
  }

  export type MovieListCreateManyInput = {
    id?: string
    name: string
    description: string
    public?: boolean
    userId: string
  }

  export type MovieListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MovieListListRelationFilter = {
    every?: MovieListWhereInput
    some?: MovieListWhereInput
    none?: MovieListWhereInput
  }

  export type MovieListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieGenderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MovieGenderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MovieGenderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MovieGenderListRelationFilter = {
    every?: MovieGenderWhereInput
    some?: MovieGenderWhereInput
    none?: MovieGenderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MovieGenderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ageRestriction?: SortOrder
    sinopsis?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    ageRestriction?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ageRestriction?: SortOrder
    sinopsis?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ageRestriction?: SortOrder
    sinopsis?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    ageRestriction?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MovieListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    userId?: SortOrder
  }

  export type MovieListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    userId?: SortOrder
  }

  export type MovieListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MovieListCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieListCreateWithoutUserInput, MovieListUncheckedCreateWithoutUserInput> | MovieListCreateWithoutUserInput[] | MovieListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutUserInput | MovieListCreateOrConnectWithoutUserInput[]
    createMany?: MovieListCreateManyUserInputEnvelope
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
  }

  export type MovieListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieListCreateWithoutUserInput, MovieListUncheckedCreateWithoutUserInput> | MovieListCreateWithoutUserInput[] | MovieListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutUserInput | MovieListCreateOrConnectWithoutUserInput[]
    createMany?: MovieListCreateManyUserInputEnvelope
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MovieListUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieListCreateWithoutUserInput, MovieListUncheckedCreateWithoutUserInput> | MovieListCreateWithoutUserInput[] | MovieListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutUserInput | MovieListCreateOrConnectWithoutUserInput[]
    upsert?: MovieListUpsertWithWhereUniqueWithoutUserInput | MovieListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieListCreateManyUserInputEnvelope
    set?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    disconnect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    delete?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    update?: MovieListUpdateWithWhereUniqueWithoutUserInput | MovieListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieListUpdateManyWithWhereWithoutUserInput | MovieListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieListScalarWhereInput | MovieListScalarWhereInput[]
  }

  export type MovieListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieListCreateWithoutUserInput, MovieListUncheckedCreateWithoutUserInput> | MovieListCreateWithoutUserInput[] | MovieListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutUserInput | MovieListCreateOrConnectWithoutUserInput[]
    upsert?: MovieListUpsertWithWhereUniqueWithoutUserInput | MovieListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieListCreateManyUserInputEnvelope
    set?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    disconnect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    delete?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    update?: MovieListUpdateWithWhereUniqueWithoutUserInput | MovieListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieListUpdateManyWithWhereWithoutUserInput | MovieListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieListScalarWhereInput | MovieListScalarWhereInput[]
  }

  export type MovieCreateNestedManyWithoutGendersInput = {
    create?: XOR<MovieCreateWithoutGendersInput, MovieUncheckedCreateWithoutGendersInput> | MovieCreateWithoutGendersInput[] | MovieUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGendersInput | MovieCreateOrConnectWithoutGendersInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutGendersInput = {
    create?: XOR<MovieCreateWithoutGendersInput, MovieUncheckedCreateWithoutGendersInput> | MovieCreateWithoutGendersInput[] | MovieUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGendersInput | MovieCreateOrConnectWithoutGendersInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUpdateManyWithoutGendersNestedInput = {
    create?: XOR<MovieCreateWithoutGendersInput, MovieUncheckedCreateWithoutGendersInput> | MovieCreateWithoutGendersInput[] | MovieUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGendersInput | MovieCreateOrConnectWithoutGendersInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutGendersInput | MovieUpsertWithWhereUniqueWithoutGendersInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutGendersInput | MovieUpdateWithWhereUniqueWithoutGendersInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutGendersInput | MovieUpdateManyWithWhereWithoutGendersInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutGendersNestedInput = {
    create?: XOR<MovieCreateWithoutGendersInput, MovieUncheckedCreateWithoutGendersInput> | MovieCreateWithoutGendersInput[] | MovieUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGendersInput | MovieCreateOrConnectWithoutGendersInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutGendersInput | MovieUpsertWithWhereUniqueWithoutGendersInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutGendersInput | MovieUpdateWithWhereUniqueWithoutGendersInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutGendersInput | MovieUpdateManyWithWhereWithoutGendersInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieGenderCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieGenderCreateWithoutMoviesInput, MovieGenderUncheckedCreateWithoutMoviesInput> | MovieGenderCreateWithoutMoviesInput[] | MovieGenderUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenderCreateOrConnectWithoutMoviesInput | MovieGenderCreateOrConnectWithoutMoviesInput[]
    connect?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
  }

  export type MovieListCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieListCreateWithoutMoviesInput, MovieListUncheckedCreateWithoutMoviesInput> | MovieListCreateWithoutMoviesInput[] | MovieListUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutMoviesInput | MovieListCreateOrConnectWithoutMoviesInput[]
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
  }

  export type MovieGenderUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieGenderCreateWithoutMoviesInput, MovieGenderUncheckedCreateWithoutMoviesInput> | MovieGenderCreateWithoutMoviesInput[] | MovieGenderUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenderCreateOrConnectWithoutMoviesInput | MovieGenderCreateOrConnectWithoutMoviesInput[]
    connect?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
  }

  export type MovieListUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieListCreateWithoutMoviesInput, MovieListUncheckedCreateWithoutMoviesInput> | MovieListCreateWithoutMoviesInput[] | MovieListUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutMoviesInput | MovieListCreateOrConnectWithoutMoviesInput[]
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieGenderUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieGenderCreateWithoutMoviesInput, MovieGenderUncheckedCreateWithoutMoviesInput> | MovieGenderCreateWithoutMoviesInput[] | MovieGenderUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenderCreateOrConnectWithoutMoviesInput | MovieGenderCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieGenderUpsertWithWhereUniqueWithoutMoviesInput | MovieGenderUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    disconnect?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    delete?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    connect?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    update?: MovieGenderUpdateWithWhereUniqueWithoutMoviesInput | MovieGenderUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieGenderUpdateManyWithWhereWithoutMoviesInput | MovieGenderUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieGenderScalarWhereInput | MovieGenderScalarWhereInput[]
  }

  export type MovieListUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieListCreateWithoutMoviesInput, MovieListUncheckedCreateWithoutMoviesInput> | MovieListCreateWithoutMoviesInput[] | MovieListUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutMoviesInput | MovieListCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieListUpsertWithWhereUniqueWithoutMoviesInput | MovieListUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    disconnect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    delete?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    update?: MovieListUpdateWithWhereUniqueWithoutMoviesInput | MovieListUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieListUpdateManyWithWhereWithoutMoviesInput | MovieListUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieListScalarWhereInput | MovieListScalarWhereInput[]
  }

  export type MovieGenderUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieGenderCreateWithoutMoviesInput, MovieGenderUncheckedCreateWithoutMoviesInput> | MovieGenderCreateWithoutMoviesInput[] | MovieGenderUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenderCreateOrConnectWithoutMoviesInput | MovieGenderCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieGenderUpsertWithWhereUniqueWithoutMoviesInput | MovieGenderUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    disconnect?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    delete?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    connect?: MovieGenderWhereUniqueInput | MovieGenderWhereUniqueInput[]
    update?: MovieGenderUpdateWithWhereUniqueWithoutMoviesInput | MovieGenderUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieGenderUpdateManyWithWhereWithoutMoviesInput | MovieGenderUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieGenderScalarWhereInput | MovieGenderScalarWhereInput[]
  }

  export type MovieListUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieListCreateWithoutMoviesInput, MovieListUncheckedCreateWithoutMoviesInput> | MovieListCreateWithoutMoviesInput[] | MovieListUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieListCreateOrConnectWithoutMoviesInput | MovieListCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieListUpsertWithWhereUniqueWithoutMoviesInput | MovieListUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    disconnect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    delete?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    connect?: MovieListWhereUniqueInput | MovieListWhereUniqueInput[]
    update?: MovieListUpdateWithWhereUniqueWithoutMoviesInput | MovieListUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieListUpdateManyWithWhereWithoutMoviesInput | MovieListUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieListScalarWhereInput | MovieListScalarWhereInput[]
  }

  export type MovieCreateNestedManyWithoutListsInput = {
    create?: XOR<MovieCreateWithoutListsInput, MovieUncheckedCreateWithoutListsInput> | MovieCreateWithoutListsInput[] | MovieUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutListsInput | MovieCreateOrConnectWithoutListsInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieUncheckedCreateNestedManyWithoutListsInput = {
    create?: XOR<MovieCreateWithoutListsInput, MovieUncheckedCreateWithoutListsInput> | MovieCreateWithoutListsInput[] | MovieUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutListsInput | MovieCreateOrConnectWithoutListsInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MovieUpdateManyWithoutListsNestedInput = {
    create?: XOR<MovieCreateWithoutListsInput, MovieUncheckedCreateWithoutListsInput> | MovieCreateWithoutListsInput[] | MovieUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutListsInput | MovieCreateOrConnectWithoutListsInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutListsInput | MovieUpsertWithWhereUniqueWithoutListsInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutListsInput | MovieUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutListsInput | MovieUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    upsert?: UserUpsertWithoutListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListsInput, UserUpdateWithoutListsInput>, UserUncheckedUpdateWithoutListsInput>
  }

  export type MovieUncheckedUpdateManyWithoutListsNestedInput = {
    create?: XOR<MovieCreateWithoutListsInput, MovieUncheckedCreateWithoutListsInput> | MovieCreateWithoutListsInput[] | MovieUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutListsInput | MovieCreateOrConnectWithoutListsInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutListsInput | MovieUpsertWithWhereUniqueWithoutListsInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutListsInput | MovieUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutListsInput | MovieUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MovieListCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    public?: boolean
    movies?: MovieCreateNestedManyWithoutListsInput
  }

  export type MovieListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    public?: boolean
    movies?: MovieUncheckedCreateNestedManyWithoutListsInput
  }

  export type MovieListCreateOrConnectWithoutUserInput = {
    where: MovieListWhereUniqueInput
    create: XOR<MovieListCreateWithoutUserInput, MovieListUncheckedCreateWithoutUserInput>
  }

  export type MovieListCreateManyUserInputEnvelope = {
    data: MovieListCreateManyUserInput | MovieListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovieListUpsertWithWhereUniqueWithoutUserInput = {
    where: MovieListWhereUniqueInput
    update: XOR<MovieListUpdateWithoutUserInput, MovieListUncheckedUpdateWithoutUserInput>
    create: XOR<MovieListCreateWithoutUserInput, MovieListUncheckedCreateWithoutUserInput>
  }

  export type MovieListUpdateWithWhereUniqueWithoutUserInput = {
    where: MovieListWhereUniqueInput
    data: XOR<MovieListUpdateWithoutUserInput, MovieListUncheckedUpdateWithoutUserInput>
  }

  export type MovieListUpdateManyWithWhereWithoutUserInput = {
    where: MovieListScalarWhereInput
    data: XOR<MovieListUpdateManyMutationInput, MovieListUncheckedUpdateManyWithoutUserInput>
  }

  export type MovieListScalarWhereInput = {
    AND?: MovieListScalarWhereInput | MovieListScalarWhereInput[]
    OR?: MovieListScalarWhereInput[]
    NOT?: MovieListScalarWhereInput | MovieListScalarWhereInput[]
    id?: StringFilter<"MovieList"> | string
    name?: StringFilter<"MovieList"> | string
    description?: StringFilter<"MovieList"> | string
    public?: BoolFilter<"MovieList"> | boolean
    userId?: StringFilter<"MovieList"> | string
  }

  export type MovieCreateWithoutGendersInput = {
    id?: string
    name: string
    ageRestriction?: number | null
    sinopsis: string
    lists?: MovieListCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutGendersInput = {
    id?: string
    name: string
    ageRestriction?: number | null
    sinopsis: string
    lists?: MovieListUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutGendersInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutGendersInput, MovieUncheckedCreateWithoutGendersInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutGendersInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutGendersInput, MovieUncheckedUpdateWithoutGendersInput>
    create: XOR<MovieCreateWithoutGendersInput, MovieUncheckedCreateWithoutGendersInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutGendersInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutGendersInput, MovieUncheckedUpdateWithoutGendersInput>
  }

  export type MovieUpdateManyWithWhereWithoutGendersInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutGendersInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: StringFilter<"Movie"> | string
    name?: StringFilter<"Movie"> | string
    ageRestriction?: IntNullableFilter<"Movie"> | number | null
    sinopsis?: StringFilter<"Movie"> | string
  }

  export type MovieGenderCreateWithoutMoviesInput = {
    id?: string
    name: string
    description: string
  }

  export type MovieGenderUncheckedCreateWithoutMoviesInput = {
    id?: string
    name: string
    description: string
  }

  export type MovieGenderCreateOrConnectWithoutMoviesInput = {
    where: MovieGenderWhereUniqueInput
    create: XOR<MovieGenderCreateWithoutMoviesInput, MovieGenderUncheckedCreateWithoutMoviesInput>
  }

  export type MovieListCreateWithoutMoviesInput = {
    id?: string
    name: string
    description: string
    public?: boolean
    User: UserCreateNestedOneWithoutListsInput
  }

  export type MovieListUncheckedCreateWithoutMoviesInput = {
    id?: string
    name: string
    description: string
    public?: boolean
    userId: string
  }

  export type MovieListCreateOrConnectWithoutMoviesInput = {
    where: MovieListWhereUniqueInput
    create: XOR<MovieListCreateWithoutMoviesInput, MovieListUncheckedCreateWithoutMoviesInput>
  }

  export type MovieGenderUpsertWithWhereUniqueWithoutMoviesInput = {
    where: MovieGenderWhereUniqueInput
    update: XOR<MovieGenderUpdateWithoutMoviesInput, MovieGenderUncheckedUpdateWithoutMoviesInput>
    create: XOR<MovieGenderCreateWithoutMoviesInput, MovieGenderUncheckedCreateWithoutMoviesInput>
  }

  export type MovieGenderUpdateWithWhereUniqueWithoutMoviesInput = {
    where: MovieGenderWhereUniqueInput
    data: XOR<MovieGenderUpdateWithoutMoviesInput, MovieGenderUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieGenderUpdateManyWithWhereWithoutMoviesInput = {
    where: MovieGenderScalarWhereInput
    data: XOR<MovieGenderUpdateManyMutationInput, MovieGenderUncheckedUpdateManyWithoutMoviesInput>
  }

  export type MovieGenderScalarWhereInput = {
    AND?: MovieGenderScalarWhereInput | MovieGenderScalarWhereInput[]
    OR?: MovieGenderScalarWhereInput[]
    NOT?: MovieGenderScalarWhereInput | MovieGenderScalarWhereInput[]
    id?: StringFilter<"MovieGender"> | string
    name?: StringFilter<"MovieGender"> | string
    description?: StringFilter<"MovieGender"> | string
  }

  export type MovieListUpsertWithWhereUniqueWithoutMoviesInput = {
    where: MovieListWhereUniqueInput
    update: XOR<MovieListUpdateWithoutMoviesInput, MovieListUncheckedUpdateWithoutMoviesInput>
    create: XOR<MovieListCreateWithoutMoviesInput, MovieListUncheckedCreateWithoutMoviesInput>
  }

  export type MovieListUpdateWithWhereUniqueWithoutMoviesInput = {
    where: MovieListWhereUniqueInput
    data: XOR<MovieListUpdateWithoutMoviesInput, MovieListUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieListUpdateManyWithWhereWithoutMoviesInput = {
    where: MovieListScalarWhereInput
    data: XOR<MovieListUpdateManyMutationInput, MovieListUncheckedUpdateManyWithoutMoviesInput>
  }

  export type MovieCreateWithoutListsInput = {
    id?: string
    name: string
    ageRestriction?: number | null
    sinopsis: string
    genders?: MovieGenderCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutListsInput = {
    id?: string
    name: string
    ageRestriction?: number | null
    sinopsis: string
    genders?: MovieGenderUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutListsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutListsInput, MovieUncheckedCreateWithoutListsInput>
  }

  export type UserCreateWithoutListsInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutListsInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutListsInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutListsInput, MovieUncheckedUpdateWithoutListsInput>
    create: XOR<MovieCreateWithoutListsInput, MovieUncheckedCreateWithoutListsInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutListsInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutListsInput, MovieUncheckedUpdateWithoutListsInput>
  }

  export type MovieUpdateManyWithWhereWithoutListsInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutListsInput>
  }

  export type UserUpsertWithoutListsInput = {
    update: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MovieListCreateManyUserInput = {
    id?: string
    name: string
    description: string
    public?: boolean
  }

  export type MovieListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    movies?: MovieUpdateManyWithoutListsNestedInput
  }

  export type MovieListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    movies?: MovieUncheckedUpdateManyWithoutListsNestedInput
  }

  export type MovieListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieUpdateWithoutGendersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
    lists?: MovieListUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutGendersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
    lists?: MovieListUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutGendersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenderUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenderUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenderUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MovieListUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutListsNestedInput
  }

  export type MovieListUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieListUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
    genders?: MovieGenderUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
    genders?: MovieGenderUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ageRestriction?: NullableIntFieldUpdateOperationsInput | number | null
    sinopsis?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}