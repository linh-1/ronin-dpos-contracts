### Description

### Contract changes

The table below shows the following info:
- **Logic**: the logic is changed.
- **ABI**: the ABI is changed.
- **Init data**: new storage field is declared and needs initializing.
- **Dependent**: needs to be changed due to changes in other contracts.

| **Contract name** | **Logic** | **ABI** | **Init data** | **Dependent** |
|-------------------|:---------:|:-------:|:-------------:|:-------------:|
| BridgeTracking    |           |         |               |               |
| GovernanceAdmin   |           |         |               |               |
| Maintenance       |           |         |               |               |
| SlashIndicator    |           |         |               |               |
| Staking           |           |         |               |               |
| StakingVesting    |           |         |               |               |
| ValidatorSet      |           |         |               |               |

### Checklist
- [ ] I have clearly commented on all the main functions following the [NatSpec Format](https://docs.soliditylang.org/en/v0.8.0/natspec-format.html)
- [ ] The box that allows repo maintainers to update this PR is checked
- [ ] I tested locally to make sure this feature/fix works
