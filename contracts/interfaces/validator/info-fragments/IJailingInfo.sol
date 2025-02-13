// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IJailingInfo {
  /**
   * @dev Returns whether the validator are put in jail (cannot join the set of validators) during the current period.
   */
  function checkJailed(address) external view returns (bool);

  /**
   * @dev Returns whether the validator are put in jail and the number of block and epoch that he still is in the jail.
   */
  function getJailedTimeLeft(address _addr)
    external
    view
    returns (
      bool isJailed_,
      uint256 blockLeft_,
      uint256 epochLeft_
    );

  /**
   * @dev Returns whether the validator are put in jail (cannot join the set of validators) at a specific block.
   */
  function checkJailedAtBlock(address _addr, uint256 _blockNum) external view returns (bool);

  /**
   * @dev Returns whether the validator are put in jail at a specific block and the number of block and epoch that he still is in the jail.
   */
  function getJailedTimeLeftAtBlock(address _addr, uint256 _blockNum)
    external
    view
    returns (
      bool isJailed_,
      uint256 blockLeft_,
      uint256 epochLeft_
    );

  /**
   * @dev Returns whether the validators are put in jail (cannot join the set of validators) during the current period.
   */
  function checkManyJailed(address[] calldata) external view returns (bool[] memory);

  /**
   * @dev Returns whether the incoming reward of the block producers are deprecated during the current period.
   */
  function checkMiningRewardDeprecated(address[] calldata _blockProducers) external view returns (bool[] memory);

  /**
   * @dev Returns whether the incoming reward of the block producers are deprecated during a specific period.
   */
  function checkMiningRewardDeprecatedAtPeriod(address[] calldata _blockProducers, uint256 _period)
    external
    view
    returns (bool[] memory);

  /**
   * @dev Returns whether the incoming reward of the validator with `_consensusAddr` is deprecated in the current period.
   */

  function checkBridgeRewardDeprecated(address _consensusAddr) external view returns (bool _result);
}
