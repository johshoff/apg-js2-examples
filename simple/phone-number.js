module.exports = function(){
"use strict";

    // SUMMARY
    //      rules = 7
    //       udts = 0
    //    opcodes = 20
    //        ALT = 0
    //        CAT = 3
    //        RNM = 9
    //        UDT = 0
    //        REP = 2
    //        AND = 0
    //        NOT = 0
    //        TLS = 3
    //        TBS = 0
    //        TRG = 3
    // characters = [40 - 57]

    // CALLBACK LIST PROTOTYPE (true, false or function reference)
    this.callbacks = [];
    this.callbacks['area-code'] = false;
    this.callbacks['digit'] = false;
    this.callbacks['gt-2'] = false;
    this.callbacks['not-9'] = false;
    this.callbacks['office'] = false;
    this.callbacks['phone-number'] = false;
    this.callbacks['subscriber'] = false;

    // OBJECT IDENTIFIER (for internal parser use)
    this.grammarObject = 'grammarObject';

    // RULES
    this.rules = [];
    this.rules[0] = {name: 'phone-number', lower: 'phone-number', index: 0};
    this.rules[1] = {name: 'area-code', lower: 'area-code', index: 1};
    this.rules[2] = {name: 'office', lower: 'office', index: 2};
    this.rules[3] = {name: 'subscriber', lower: 'subscriber', index: 3};
    this.rules[4] = {name: 'gt-2', lower: 'gt-2', index: 4};
    this.rules[5] = {name: 'not-9', lower: 'not-9', index: 5};
    this.rules[6] = {name: 'digit', lower: 'digit', index: 6};

    // UDTS
    this.udts = [];

    // OPCODES
    // phone-number
    this.rules[0].opcodes = [];
    this.rules[0].opcodes[0] = {type: 2, children: [1,2,3,4,5,6]};// CAT
    this.rules[0].opcodes[1] = {type: 9, string: [40]};// TLS
    this.rules[0].opcodes[2] = {type: 4, index: 1};// RNM(area-code)
    this.rules[0].opcodes[3] = {type: 9, string: [41]};// TLS
    this.rules[0].opcodes[4] = {type: 4, index: 2};// RNM(office)
    this.rules[0].opcodes[5] = {type: 9, string: [45]};// TLS
    this.rules[0].opcodes[6] = {type: 4, index: 3};// RNM(subscriber)

    // area-code
    this.rules[1].opcodes = [];
    this.rules[1].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
    this.rules[1].opcodes[1] = {type: 4, index: 4};// RNM(gt-2)
    this.rules[1].opcodes[2] = {type: 4, index: 5};// RNM(not-9)
    this.rules[1].opcodes[3] = {type: 4, index: 6};// RNM(digit)

    // office
    this.rules[2].opcodes = [];
    this.rules[2].opcodes[0] = {type: 2, children: [1,2]};// CAT
    this.rules[2].opcodes[1] = {type: 4, index: 4};// RNM(gt-2)
    this.rules[2].opcodes[2] = {type: 3, min: 2, max: 2};// REP
    this.rules[2].opcodes[3] = {type: 4, index: 6};// RNM(digit)

    // subscriber
    this.rules[3].opcodes = [];
    this.rules[3].opcodes[0] = {type: 3, min: 4, max: 4};// REP
    this.rules[3].opcodes[1] = {type: 4, index: 6};// RNM(digit)

    // gt-2
    this.rules[4].opcodes = [];
    this.rules[4].opcodes[0] = {type: 8, min: 50, max: 57};// TRG

    // not-9
    this.rules[5].opcodes = [];
    this.rules[5].opcodes[0] = {type: 8, min: 48, max: 56};// TRG

    // digit
    this.rules[6].opcodes = [];
    this.rules[6].opcodes[0] = {type: 8, min: 48, max: 57};// TRG
};

// INPUT GRAMMAR FILE(s)
//
// ;
// ; Ref: Wikipedia, North American Numbering Plan
// ;
// phone-number = "(" area-code ")" office "-" subscriber
// area-code = gt-2 not-9 digit
// office = gt-2 2digit
// subscriber = 4digit
// gt-2 = %d50-57
// not-9 = %d48-56
// digit = %d48-57
