module.exports = function(){
"use strict";

    // SUMMARY
    //      rules = 24
    //       udts = 0
    //    opcodes = 137
    //        ALT = 20
    //        CAT = 15
    //        RNM = 51
    //        UDT = 0
    //        REP = 17
    //        AND = 0
    //        NOT = 0
    //        TLS = 5
    //        TBS = 17
    //        TRG = 12
    // characters = [9 - 126]

    // CALLBACK LIST PROTOTYPE (true, false or function reference)
    this.callbacks = [];
    this.callbacks['alpha'] = false;
    this.callbacks['alphadigit'] = false;
    this.callbacks['any'] = false;
    this.callbacks['badblankline'] = false;
    this.callbacks['badsectionline'] = false;
    this.callbacks['badvalueline'] = false;
    this.callbacks['blankline'] = false;
    this.callbacks['comment'] = false;
    this.callbacks['digit'] = false;
    this.callbacks['dquotedstring'] = false;
    this.callbacks['goodblankline'] = false;
    this.callbacks['goodsectionline'] = false;
    this.callbacks['goodvalueline'] = false;
    this.callbacks['inifile'] = false;
    this.callbacks['keyname'] = false;
    this.callbacks['lineend'] = false;
    this.callbacks['section'] = false;
    this.callbacks['sectionline'] = false;
    this.callbacks['sectionname'] = false;
    this.callbacks['squotedstring'] = false;
    this.callbacks['value'] = false;
    this.callbacks['valuearray'] = false;
    this.callbacks['valueline'] = false;
    this.callbacks['wsp'] = false;

    // OBJECT IDENTIFIER (for internal parser use)
    this.grammarObject = 'grammarObject';

    // RULES
    this.rules = [];
    this.rules[0] = {name: 'IniFile', lower: 'inifile', index: 0};
    this.rules[1] = {name: 'Section', lower: 'section', index: 1};
    this.rules[2] = {name: 'SectionLine', lower: 'sectionline', index: 2};
    this.rules[3] = {name: 'GoodSectionLine', lower: 'goodsectionline', index: 3};
    this.rules[4] = {name: 'BadSectionLine', lower: 'badsectionline', index: 4};
    this.rules[5] = {name: 'ValueLine', lower: 'valueline', index: 5};
    this.rules[6] = {name: 'GoodValueLine', lower: 'goodvalueline', index: 6};
    this.rules[7] = {name: 'BadValueLine', lower: 'badvalueline', index: 7};
    this.rules[8] = {name: 'ValueArray', lower: 'valuearray', index: 8};
    this.rules[9] = {name: 'SectionName', lower: 'sectionname', index: 9};
    this.rules[10] = {name: 'KeyName', lower: 'keyname', index: 10};
    this.rules[11] = {name: 'Value', lower: 'value', index: 11};
    this.rules[12] = {name: 'DQuotedString', lower: 'dquotedstring', index: 12};
    this.rules[13] = {name: 'SQuotedString', lower: 'squotedstring', index: 13};
    this.rules[14] = {name: 'AlphaDigit', lower: 'alphadigit', index: 14};
    this.rules[15] = {name: 'BlankLine', lower: 'blankline', index: 15};
    this.rules[16] = {name: 'GoodBlankLine', lower: 'goodblankline', index: 16};
    this.rules[17] = {name: 'BadBlankLine', lower: 'badblankline', index: 17};
    this.rules[18] = {name: 'LineEnd', lower: 'lineend', index: 18};
    this.rules[19] = {name: 'comment', lower: 'comment', index: 19};
    this.rules[20] = {name: 'wsp', lower: 'wsp', index: 20};
    this.rules[21] = {name: 'alpha', lower: 'alpha', index: 21};
    this.rules[22] = {name: 'digit', lower: 'digit', index: 22};
    this.rules[23] = {name: 'any', lower: 'any', index: 23};

    // UDTS
    this.udts = [];

    // OPCODES
    // IniFile
    this.rules[0].opcodes = [];
    this.rules[0].opcodes[0] = {type: 2, children: [1,5]};// CAT
    this.rules[0].opcodes[1] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[0].opcodes[2] = {type: 1, children: [3,4]};// ALT
    this.rules[0].opcodes[3] = {type: 4, index: 15};// RNM(BlankLine)
    this.rules[0].opcodes[4] = {type: 4, index: 5};// RNM(ValueLine)
    this.rules[0].opcodes[5] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[0].opcodes[6] = {type: 4, index: 1};// RNM(Section)

    // Section
    this.rules[1].opcodes = [];
    this.rules[1].opcodes[0] = {type: 2, children: [1,2]};// CAT
    this.rules[1].opcodes[1] = {type: 4, index: 2};// RNM(SectionLine)
    this.rules[1].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[1].opcodes[3] = {type: 1, children: [4,5]};// ALT
    this.rules[1].opcodes[4] = {type: 4, index: 15};// RNM(BlankLine)
    this.rules[1].opcodes[5] = {type: 4, index: 5};// RNM(ValueLine)

    // SectionLine
    this.rules[2].opcodes = [];
    this.rules[2].opcodes[0] = {type: 1, children: [1,2]};// ALT
    this.rules[2].opcodes[1] = {type: 4, index: 3};// RNM(GoodSectionLine)
    this.rules[2].opcodes[2] = {type: 4, index: 4};// RNM(BadSectionLine)

    // GoodSectionLine
    this.rules[3].opcodes = [];
    this.rules[3].opcodes[0] = {type: 2, children: [1,2,3,4,5,6,7,9]};// CAT
    this.rules[3].opcodes[1] = {type: 9, string: [91]};// TLS
    this.rules[3].opcodes[2] = {type: 4, index: 20};// RNM(wsp)
    this.rules[3].opcodes[3] = {type: 4, index: 9};// RNM(SectionName)
    this.rules[3].opcodes[4] = {type: 4, index: 20};// RNM(wsp)
    this.rules[3].opcodes[5] = {type: 9, string: [93]};// TLS
    this.rules[3].opcodes[6] = {type: 4, index: 20};// RNM(wsp)
    this.rules[3].opcodes[7] = {type: 3, min: 0, max: 1};// REP
    this.rules[3].opcodes[8] = {type: 4, index: 19};// RNM(comment)
    this.rules[3].opcodes[9] = {type: 4, index: 18};// RNM(LineEnd)

    // BadSectionLine
    this.rules[4].opcodes = [];
    this.rules[4].opcodes[0] = {type: 2, children: [1,2,4]};// CAT
    this.rules[4].opcodes[1] = {type: 9, string: [91]};// TLS
    this.rules[4].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[4].opcodes[3] = {type: 4, index: 23};// RNM(any)
    this.rules[4].opcodes[4] = {type: 4, index: 18};// RNM(LineEnd)

    // ValueLine
    this.rules[5].opcodes = [];
    this.rules[5].opcodes[0] = {type: 1, children: [1,2]};// ALT
    this.rules[5].opcodes[1] = {type: 4, index: 6};// RNM(GoodValueLine)
    this.rules[5].opcodes[2] = {type: 4, index: 7};// RNM(BadValueLine)

    // GoodValueLine
    this.rules[6].opcodes = [];
    this.rules[6].opcodes[0] = {type: 2, children: [1,2,3,4,5,6,7,9]};// CAT
    this.rules[6].opcodes[1] = {type: 4, index: 10};// RNM(KeyName)
    this.rules[6].opcodes[2] = {type: 4, index: 20};// RNM(wsp)
    this.rules[6].opcodes[3] = {type: 9, string: [61]};// TLS
    this.rules[6].opcodes[4] = {type: 4, index: 20};// RNM(wsp)
    this.rules[6].opcodes[5] = {type: 4, index: 8};// RNM(ValueArray)
    this.rules[6].opcodes[6] = {type: 4, index: 20};// RNM(wsp)
    this.rules[6].opcodes[7] = {type: 3, min: 0, max: 1};// REP
    this.rules[6].opcodes[8] = {type: 4, index: 19};// RNM(comment)
    this.rules[6].opcodes[9] = {type: 4, index: 18};// RNM(LineEnd)

    // BadValueLine
    this.rules[7].opcodes = [];
    this.rules[7].opcodes[0] = {type: 2, children: [1,4,6]};// CAT
    this.rules[7].opcodes[1] = {type: 1, children: [2,3]};// ALT
    this.rules[7].opcodes[2] = {type: 8, min: 33, max: 90};// TRG
    this.rules[7].opcodes[3] = {type: 8, min: 92, max: 126};// TRG
    this.rules[7].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[7].opcodes[5] = {type: 4, index: 23};// RNM(any)
    this.rules[7].opcodes[6] = {type: 4, index: 18};// RNM(LineEnd)

    // ValueArray
    this.rules[8].opcodes = [];
    this.rules[8].opcodes[0] = {type: 2, children: [1,2]};// CAT
    this.rules[8].opcodes[1] = {type: 4, index: 11};// RNM(Value)
    this.rules[8].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[8].opcodes[3] = {type: 2, children: [4,5,6,7]};// CAT
    this.rules[8].opcodes[4] = {type: 4, index: 20};// RNM(wsp)
    this.rules[8].opcodes[5] = {type: 9, string: [44]};// TLS
    this.rules[8].opcodes[6] = {type: 4, index: 20};// RNM(wsp)
    this.rules[8].opcodes[7] = {type: 4, index: 11};// RNM(Value)

    // SectionName
    this.rules[9].opcodes = [];
    this.rules[9].opcodes[0] = {type: 2, children: [1,4]};// CAT
    this.rules[9].opcodes[1] = {type: 1, children: [2,3]};// ALT
    this.rules[9].opcodes[2] = {type: 4, index: 21};// RNM(alpha)
    this.rules[9].opcodes[3] = {type: 10, string: [95]};// TBS
    this.rules[9].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[9].opcodes[5] = {type: 1, children: [6,7,8]};// ALT
    this.rules[9].opcodes[6] = {type: 4, index: 21};// RNM(alpha)
    this.rules[9].opcodes[7] = {type: 4, index: 22};// RNM(digit)
    this.rules[9].opcodes[8] = {type: 10, string: [95]};// TBS

    // KeyName
    this.rules[10].opcodes = [];
    this.rules[10].opcodes[0] = {type: 2, children: [1,4]};// CAT
    this.rules[10].opcodes[1] = {type: 1, children: [2,3]};// ALT
    this.rules[10].opcodes[2] = {type: 4, index: 21};// RNM(alpha)
    this.rules[10].opcodes[3] = {type: 10, string: [95]};// TBS
    this.rules[10].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[10].opcodes[5] = {type: 1, children: [6,7,8]};// ALT
    this.rules[10].opcodes[6] = {type: 4, index: 21};// RNM(alpha)
    this.rules[10].opcodes[7] = {type: 4, index: 22};// RNM(digit)
    this.rules[10].opcodes[8] = {type: 10, string: [95]};// TBS

    // Value
    this.rules[11].opcodes = [];
    this.rules[11].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
    this.rules[11].opcodes[1] = {type: 4, index: 12};// RNM(DQuotedString)
    this.rules[11].opcodes[2] = {type: 4, index: 13};// RNM(SQuotedString)
    this.rules[11].opcodes[3] = {type: 4, index: 14};// RNM(AlphaDigit)

    // DQuotedString
    this.rules[12].opcodes = [];
    this.rules[12].opcodes[0] = {type: 2, children: [1,2,6]};// CAT
    this.rules[12].opcodes[1] = {type: 10, string: [34]};// TBS
    this.rules[12].opcodes[2] = {type: 3, min: 1, max: Infinity};// REP
    this.rules[12].opcodes[3] = {type: 1, children: [4,5]};// ALT
    this.rules[12].opcodes[4] = {type: 8, min: 32, max: 33};// TRG
    this.rules[12].opcodes[5] = {type: 8, min: 35, max: 126};// TRG
    this.rules[12].opcodes[6] = {type: 10, string: [34]};// TBS

    // SQuotedString
    this.rules[13].opcodes = [];
    this.rules[13].opcodes[0] = {type: 2, children: [1,2,6]};// CAT
    this.rules[13].opcodes[1] = {type: 10, string: [39]};// TBS
    this.rules[13].opcodes[2] = {type: 3, min: 1, max: Infinity};// REP
    this.rules[13].opcodes[3] = {type: 1, children: [4,5]};// ALT
    this.rules[13].opcodes[4] = {type: 8, min: 32, max: 38};// TRG
    this.rules[13].opcodes[5] = {type: 8, min: 40, max: 126};// TRG
    this.rules[13].opcodes[6] = {type: 10, string: [39]};// TBS

    // AlphaDigit
    this.rules[14].opcodes = [];
    this.rules[14].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
    this.rules[14].opcodes[1] = {type: 1, children: [2,3]};// ALT
    this.rules[14].opcodes[2] = {type: 4, index: 21};// RNM(alpha)
    this.rules[14].opcodes[3] = {type: 4, index: 22};// RNM(digit)

    // BlankLine
    this.rules[15].opcodes = [];
    this.rules[15].opcodes[0] = {type: 1, children: [1,2]};// ALT
    this.rules[15].opcodes[1] = {type: 4, index: 16};// RNM(GoodBlankLine)
    this.rules[15].opcodes[2] = {type: 4, index: 17};// RNM(BadBlankLine)

    // GoodBlankLine
    this.rules[16].opcodes = [];
    this.rules[16].opcodes[0] = {type: 2, children: [1,2,4]};// CAT
    this.rules[16].opcodes[1] = {type: 4, index: 20};// RNM(wsp)
    this.rules[16].opcodes[2] = {type: 3, min: 0, max: 1};// REP
    this.rules[16].opcodes[3] = {type: 4, index: 19};// RNM(comment)
    this.rules[16].opcodes[4] = {type: 4, index: 18};// RNM(LineEnd)

    // BadBlankLine
    this.rules[17].opcodes = [];
    this.rules[17].opcodes[0] = {type: 2, children: [1,4,5,8,10]};// CAT
    this.rules[17].opcodes[1] = {type: 1, children: [2,3]};// ALT
    this.rules[17].opcodes[2] = {type: 10, string: [32]};// TBS
    this.rules[17].opcodes[3] = {type: 10, string: [9]};// TBS
    this.rules[17].opcodes[4] = {type: 4, index: 20};// RNM(wsp)
    this.rules[17].opcodes[5] = {type: 1, children: [6,7]};// ALT
    this.rules[17].opcodes[6] = {type: 8, min: 33, max: 58};// TRG
    this.rules[17].opcodes[7] = {type: 8, min: 60, max: 126};// TRG
    this.rules[17].opcodes[8] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[17].opcodes[9] = {type: 4, index: 23};// RNM(any)
    this.rules[17].opcodes[10] = {type: 4, index: 18};// RNM(LineEnd)

    // LineEnd
    this.rules[18].opcodes = [];
    this.rules[18].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
    this.rules[18].opcodes[1] = {type: 10, string: [13,10]};// TBS
    this.rules[18].opcodes[2] = {type: 10, string: [10]};// TBS
    this.rules[18].opcodes[3] = {type: 10, string: [13]};// TBS

    // comment
    this.rules[19].opcodes = [];
    this.rules[19].opcodes[0] = {type: 2, children: [1,2]};// CAT
    this.rules[19].opcodes[1] = {type: 10, string: [59]};// TBS
    this.rules[19].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[19].opcodes[3] = {type: 4, index: 23};// RNM(any)

    // wsp
    this.rules[20].opcodes = [];
    this.rules[20].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
    this.rules[20].opcodes[1] = {type: 1, children: [2,3]};// ALT
    this.rules[20].opcodes[2] = {type: 10, string: [32]};// TBS
    this.rules[20].opcodes[3] = {type: 10, string: [9]};// TBS

    // alpha
    this.rules[21].opcodes = [];
    this.rules[21].opcodes[0] = {type: 1, children: [1,2]};// ALT
    this.rules[21].opcodes[1] = {type: 8, min: 65, max: 90};// TRG
    this.rules[21].opcodes[2] = {type: 8, min: 97, max: 122};// TRG

    // digit
    this.rules[22].opcodes = [];
    this.rules[22].opcodes[0] = {type: 8, min: 48, max: 57};// TRG

    // any
    this.rules[23].opcodes = [];
    this.rules[23].opcodes[0] = {type: 1, children: [1,2]};// ALT
    this.rules[23].opcodes[1] = {type: 8, min: 32, max: 126};// TRG
    this.rules[23].opcodes[2] = {type: 10, string: [9]};// TBS
}

// INPUT GRAMMAR FILE(s)
//
// ;
// ; Ref: https://en.wikipedia.org: INI File
// ;
// ; comments begin with the semicolon, ";" and continue to the end of the line
// ; comments may appear on valid section and value lines as well as blank lines
// ; line ends may be CRLF, LF or CR
// ; tabs, 0x09, may NOT occur in quoted strings
// ;
// ; keys may have multiple values
// ;   - multiple values may be given as a comma delimited list on a single line
// ;   - multiple values may be listed separately on separate lines with the same key name
// ;
// ; section names are optional
// ;   - keys need not appear in a named section
// ;
// ; sections are "disjoint",
// ;   - that is the keys in multiple occurrences of a section name are
// ;   - simply joined together as if they appeared contiguously in a single section
// ;
// ; sections end at the beginning of a new section or the end of file
// ;
// ; section and key names are alphanumeric + underscore (must begin with alpha or underscore)
// ; values that are not alphanumeric must be single or double quoted
// ;
// ; The grammar is designed to accept any string of ASCII characters without failure.
// ; The "error productions", BadSectionLine, BadValueLine, BadBlankLine are meant to accept all lines
// ; that are not otherwise correct blank, section or value lines. This is so that
// ; parser callback functions can recognize input errors and report or react to them
// ; in an application-dependent manner.
// ;
// ;
// IniFile         = *(BlankLine/ValueLine) *Section
// Section         = SectionLine *(BlankLine/ValueLine)
// SectionLine     = GoodSectionLine/BadSectionLine
// GoodSectionLine = "[" wsp SectionName wsp "]" wsp [comment] LineEnd
// BadSectionLine  = "[" *any LineEnd;
// ValueLine       = GoodValueLine/BadValueLine
// GoodValueLine   = KeyName wsp "=" wsp ValueArray wsp [comment] LineEnd
// BadValueLine    = (%d33-90/%d92-126) *any LineEnd
// ValueArray      = Value *(wsp "," wsp Value)
// SectionName     = (alpha/%d95) *(alpha/digit/%d95)
// KeyName         = (alpha/%d95) *(alpha/digit/%d95)
// Value           = DQuotedString/SQuotedString/AlphaDigit
// DQuotedString   = %d34 1*(%d32-33/%d35-126) %d34
// SQuotedString   = %d39 1*(%d32-38/%d40-126) %d39
// AlphaDigit      = 1*(alpha/digit)
// BlankLine       = GoodBlankLine/BadBlankLine
// GoodBlankLine   = wsp [comment] LineEnd
// BadBlankLine    = (%d32/%d9) wsp (%d33-58/%d60-126) *any LineEnd
// LineEnd         = %d13.10/%d10/%d13
// comment         = %d59 *any
// wsp             = *(%d32/%d9)
// alpha           = %d65-90/%d97-122
// digit           = %d48-57
// any             = %d32-126/%d9
