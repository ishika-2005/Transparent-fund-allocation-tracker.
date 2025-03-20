// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundAllocationTracker {
    string public projectTitle;
    string public projectDescription;
    address public owner;
    
    event ProjectUpdated(string title, string description);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can update the project details");
        _;
    }
    
    constructor(string memory _title, string memory _description) {
        owner = msg.sender;
        projectTitle = _title;
        projectDescription = _description;
    }
    
    function setProjectDetails(string memory _title, string memory _description) public onlyOwner {
        projectTitle = _title;
        projectDescription = _description;
        emit ProjectUpdated(_title, _description);
    }
    
    function getProjectDetails() public view returns (string memory, string memory) {
        return (projectTitle, projectDescription);
    }
}
