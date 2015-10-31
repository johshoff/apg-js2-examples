module.exports = function(){
"use strict";

    // SUMMARY
    //      rules = 15
    //       udts = 1
    //    opcodes = 57
    //        ALT = 3
    //        CAT = 8
    //        RNM = 20
    //        UDT = 3
    //        REP = 5
    //        AND = 0
    //        NOT = 0
    //        TLS = 4
    //        TBS = 10
    //        TRG = 4
    // characters = [9 - 10091] + user defined

    // CALLBACK LIST PROTOTYPE (true, false or function reference)
    this.callbacks = [];
    this.callbacks['any'] = false;
    this.callbacks['area'] = false;
    this.callbacks['blank-line'] = false;
    this.callbacks['comment'] = false;
    this.callbacks['digit'] = false;
    this.callbacks['gt-2'] = false;
    this.callbacks['heavy-number'] = false;
    this.callbacks['line-end'] = false;
    this.callbacks['not-9'] = false;
    this.callbacks['ornament-number'] = false;
    this.callbacks['phone-line'] = false;
    this.callbacks['phone-number'] = false;
    this.callbacks['prefix'] = false;
    this.callbacks['regular-number'] = false;
    this.callbacks['subscriber'] = false;
    this.callbacks['u_office'] = false;

    // OBJECT IDENTIFIER (for internal parser use)
    this.grammarObject = 'grammarObject';

    // RULES
    this.rules = [];
    this.rules[0] = {name: 'phone-number', lower: 'phone-number', index: 0};
    this.rules[1] = {name: 'prefix', lower: 'prefix', index: 1};
    this.rules[2] = {name: 'blank-line', lower: 'blank-line', index: 2};
    this.rules[3] = {name: 'comment', lower: 'comment', index: 3};
    this.rules[4] = {name: 'any', lower: 'any', index: 4};
    this.rules[5] = {name: 'phone-line', lower: 'phone-line', index: 5};
    this.rules[6] = {name: 'regular-number', lower: 'regular-number', index: 6};
    this.rules[7] = {name: 'ornament-number', lower: 'ornament-number', index: 7};
    this.rules[8] = {name: 'heavy-number', lower: 'heavy-number', index: 8};
    this.rules[9] = {name: 'area', lower: 'area', index: 9};
    this.rules[10] = {name: 'subscriber', lower: 'subscriber', index: 10};
    this.rules[11] = {name: 'gt-2', lower: 'gt-2', index: 11};
    this.rules[12] = {name: 'not-9', lower: 'not-9', index: 12};
    this.rules[13] = {name: 'digit', lower: 'digit', index: 13};
    this.rules[14] = {name: 'line-end', lower: 'line-end', index: 14};

    // UDTS
    this.udts = [];
    this.udts[0] = {name: 'u_office', lower: 'u_office', empty: false, index: 0};

    // OPCODES
    // phone-number
    this.rules[0].opcodes = [];
    this.rules[0].opcodes[0] = {type: 2, children: [1,2]};// CAT
    this.rules[0].opcodes[1] = {type: 4, index: 1};// RNM(prefix)
    this.rules[0].opcodes[2] = {type: 4, index: 5};// RNM(phone-line)

    // prefix
    this.rules[1].opcodes = [];
    this.rules[1].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[1].opcodes[1] = {type: 4, index: 2};// RNM(blank-line)

    // blank-line
    this.rules[2].opcodes = [];
    this.rules[2].opcodes[0] = {type: 2, children: [1,5,7]};// CAT
    this.rules[2].opcodes[1] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[2].opcodes[2] = {type: 1, children: [3,4]};// ALT
    this.rules[2].opcodes[3] = {type: 10, string: [32]};// TBS
    this.rules[2].opcodes[4] = {type: 10, string: [9]};// TBS
    this.rules[2].opcodes[5] = {type: 3, min: 0, max: 1};// REP
    this.rules[2].opcodes[6] = {type: 4, index: 3};// RNM(comment)
    this.rules[2].opcodes[7] = {type: 4, index: 14};// RNM(line-end)

    // comment
    this.rules[3].opcodes = [];
    this.rules[3].opcodes[0] = {type: 2, children: [1,2]};// CAT
    this.rules[3].opcodes[1] = {type: 9, string: [59]};// TLS
    this.rules[3].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[3].opcodes[3] = {type: 4, index: 4};// RNM(any)

    // any
    this.rules[4].opcodes = [];
    this.rules[4].opcodes[0] = {type: 1, children: [1,2]};// ALT
    this.rules[4].opcodes[1] = {type: 8, min: 32, max: 126};// TRG
    this.rules[4].opcodes[2] = {type: 10, string: [9]};// TBS

    // phone-line
    this.rules[5].opcodes = [];
    this.rules[5].opcodes[0] = {type: 2, children: [1,5]};// CAT
    this.rules[5].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
    this.rules[5].opcodes[2] = {type: 4, index: 6};// RNM(regular-number)
    this.rules[5].opcodes[3] = {type: 4, index: 7};// RNM(ornament-number)
    this.rules[5].opcodes[4] = {type: 4, index: 8};// RNM(heavy-number)
    this.rules[5].opcodes[5] = {type: 4, index: 14};// RNM(line-end)

    // regular-number
    this.rules[6].opcodes = [];
    this.rules[6].opcodes[0] = {type: 2, children: [1,2,3,4,5,6]};// CAT
    this.rules[6].opcodes[1] = {type: 9, string: [40]};// TLS
    this.rules[6].opcodes[2] = {type: 4, index: 9};// RNM(area)
    this.rules[6].opcodes[3] = {type: 9, string: [41]};// TLS
    this.rules[6].opcodes[4] = {type: 5, empty: false, index: 0};// UDT(u_office)
    this.rules[6].opcodes[5] = {type: 9, string: [45]};// TLS
    this.rules[6].opcodes[6] = {type: 4, index: 10};// RNM(subscriber)

    // ornament-number
    this.rules[7].opcodes = [];
    this.rules[7].opcodes[0] = {type: 2, children: [1,2,3,4,5,6]};// CAT
    this.rules[7].opcodes[1] = {type: 10, string: [10088]};// TBS
    this.rules[7].opcodes[2] = {type: 4, index: 9};// RNM(area)
    this.rules[7].opcodes[3] = {type: 10, string: [10089]};// TBS
    this.rules[7].opcodes[4] = {type: 5, empty: false, index: 0};// UDT(u_office)
    this.rules[7].opcodes[5] = {type: 10, string: [8210]};// TBS
    this.rules[7].opcodes[6] = {type: 4, index: 10};// RNM(subscriber)

    // heavy-number
    this.rules[8].opcodes = [];
    this.rules[8].opcodes[0] = {type: 2, children: [1,2,3,4,5,6]};// CAT
    this.rules[8].opcodes[1] = {type: 10, string: [10090]};// TBS
    this.rules[8].opcodes[2] = {type: 4, index: 9};// RNM(area)
    this.rules[8].opcodes[3] = {type: 10, string: [10091]};// TBS
    this.rules[8].opcodes[4] = {type: 5, empty: false, index: 0};// UDT(u_office)
    this.rules[8].opcodes[5] = {type: 10, string: [9549]};// TBS
    this.rules[8].opcodes[6] = {type: 4, index: 10};// RNM(subscriber)

    // area
    this.rules[9].opcodes = [];
    this.rules[9].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
    this.rules[9].opcodes[1] = {type: 4, index: 11};// RNM(gt-2)
    this.rules[9].opcodes[2] = {type: 4, index: 12};// RNM(not-9)
    this.rules[9].opcodes[3] = {type: 4, index: 13};// RNM(digit)

    // subscriber
    this.rules[10].opcodes = [];
    this.rules[10].opcodes[0] = {type: 3, min: 4, max: 4};// REP
    this.rules[10].opcodes[1] = {type: 4, index: 13};// RNM(digit)

    // gt-2
    this.rules[11].opcodes = [];
    this.rules[11].opcodes[0] = {type: 8, min: 50, max: 57};// TRG

    // not-9
    this.rules[12].opcodes = [];
    this.rules[12].opcodes[0] = {type: 8, min: 48, max: 56};// TRG

    // digit
    this.rules[13].opcodes = [];
    this.rules[13].opcodes[0] = {type: 8, min: 48, max: 57};// TRG

    // line-end
    this.rules[14].opcodes = [];
    this.rules[14].opcodes[0] = {type: 10, string: [10]};// TBS
}

// INPUT GRAMMAR FILE(s)
//
// ;
// ; Ref: Wikipedia, North American Numbering Plan
// ;
// ; specifications for demonstration purposes:
// ;   1. MATCHED phrases
// ;   2. EMPTY phrases
// ;   3. NOMATCH phrases - backtracking
// ;   4. operators, RNM, UDT, TLS, TBS, TRG
// ;   5; non-ascii characters
// ;
// phone-number = prefix phone-line
// prefix = *blank-line
// blank-line = *(%d32/%d9) [comment] line-end
// comment = ";" *any
// any = %d32-126/%d9
// phone-line = (regular-number / ornament-number / heavy-number) line-end
// regular-number = "(" area ")" u_office "-" subscriber
// ornament-number = %d10088 area %d10089 u_office %d8210 subscriber 
// heavy-number = %d10090 area %d10091 u_office %d9549 subscriber 
// 
// area = gt-2 not-9 digit
// subscriber = 4digit
// 
// gt-2 = %d50-57
// not-9 = %d48-56
// digit = %d48-57
// line-end = %d10