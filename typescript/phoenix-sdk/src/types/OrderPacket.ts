/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import { Side, sideBeet } from "./Side";
import { SelfTradeBehavior, selfTradeBehaviorBeet } from "./SelfTradeBehavior";
/**
 * This type is used to derive the {@link OrderPacket} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link OrderPacket} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type OrderPacketRecord = {
  PostOnly: {
    side: Side;
    priceInTicks: beet.bignum;
    numBaseLots: beet.bignum;
    clientOrderId: beet.bignum;
    rejectPostOnly: boolean;
    useOnlyDepositedFunds: boolean;
    lastValidSlot: beet.COption<beet.bignum>;
    lastValidUnixTimestampInSeconds: beet.COption<beet.bignum>;
  };
  Limit: {
    side: Side;
    priceInTicks: beet.bignum;
    numBaseLots: beet.bignum;
    selfTradeBehavior: SelfTradeBehavior;
    matchLimit: beet.COption<beet.bignum>;
    clientOrderId: beet.bignum;
    useOnlyDepositedFunds: boolean;
    lastValidSlot: beet.COption<beet.bignum>;
    lastValidUnixTimestampInSeconds: beet.COption<beet.bignum>;
  };
  ImmediateOrCancel: {
    side: Side;
    priceInTicks: beet.COption<beet.bignum>;
    numBaseLots: beet.bignum;
    numQuoteLots: beet.bignum;
    minBaseLotsToFill: beet.bignum;
    minQuoteLotsToFill: beet.bignum;
    selfTradeBehavior: SelfTradeBehavior;
    matchLimit: beet.COption<beet.bignum>;
    clientOrderId: beet.bignum;
    useOnlyDepositedFunds: boolean;
    lastValidSlot: beet.COption<beet.bignum>;
    lastValidUnixTimestampInSeconds: beet.COption<beet.bignum>;
  };
};

/**
 * Union type respresenting the OrderPacket data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isOrderPacket*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type OrderPacket = beet.DataEnumKeyAsKind<OrderPacketRecord>;

export const isOrderPacketPostOnly = (
  x: OrderPacket
): x is OrderPacket & { __kind: "PostOnly" } => x.__kind === "PostOnly";
export const isOrderPacketLimit = (
  x: OrderPacket
): x is OrderPacket & { __kind: "Limit" } => x.__kind === "Limit";
export const isOrderPacketImmediateOrCancel = (
  x: OrderPacket
): x is OrderPacket & { __kind: "ImmediateOrCancel" } =>
  x.__kind === "ImmediateOrCancel";

/**
 * @category userTypes
 * @category generated
 */
export const orderPacketBeet = beet.dataEnum<OrderPacketRecord>([
  [
    "PostOnly",
    new beet.FixableBeetArgsStruct<OrderPacketRecord["PostOnly"]>(
      [
        ["side", sideBeet],
        ["priceInTicks", beet.u64],
        ["numBaseLots", beet.u64],
        ["clientOrderId", beet.u128],
        ["rejectPostOnly", beet.bool],
        ["useOnlyDepositedFunds", beet.bool],
        ["lastValidSlot", beet.coption(beet.u64)],
        ["lastValidUnixTimestampInSeconds", beet.coption(beet.u64)],
      ],
      'OrderPacketRecord["PostOnly"]'
    ),
  ],

  [
    "Limit",
    new beet.FixableBeetArgsStruct<OrderPacketRecord["Limit"]>(
      [
        ["side", sideBeet],
        ["priceInTicks", beet.u64],
        ["numBaseLots", beet.u64],
        ["selfTradeBehavior", selfTradeBehaviorBeet],
        ["matchLimit", beet.coption(beet.u64)],
        ["clientOrderId", beet.u128],
        ["useOnlyDepositedFunds", beet.bool],
        ["lastValidSlot", beet.coption(beet.u64)],
        ["lastValidUnixTimestampInSeconds", beet.coption(beet.u64)],
      ],
      'OrderPacketRecord["Limit"]'
    ),
  ],

  [
    "ImmediateOrCancel",
    new beet.FixableBeetArgsStruct<OrderPacketRecord["ImmediateOrCancel"]>(
      [
        ["side", sideBeet],
        ["priceInTicks", beet.coption(beet.u64)],
        ["numBaseLots", beet.u64],
        ["numQuoteLots", beet.u64],
        ["minBaseLotsToFill", beet.u64],
        ["minQuoteLotsToFill", beet.u64],
        ["selfTradeBehavior", selfTradeBehaviorBeet],
        ["matchLimit", beet.coption(beet.u64)],
        ["clientOrderId", beet.u128],
        ["useOnlyDepositedFunds", beet.bool],
        ["lastValidSlot", beet.coption(beet.u64)],
        ["lastValidUnixTimestampInSeconds", beet.coption(beet.u64)],
      ],
      'OrderPacketRecord["ImmediateOrCancel"]'
    ),
  ],
]) as beet.FixableBeet<OrderPacket, OrderPacket>;
