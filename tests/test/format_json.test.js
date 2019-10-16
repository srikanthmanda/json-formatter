import { assert } from 'chai';

import { formatJSON } from '../../format_json.js'

describe('formatJSON function', function() {
    it('formats Array,', function () {
        assert.equal(formatJSON(JSON.parse('[1, 2, 3]')), '[\n'
            + '	1,\n'
            + '	2,\n'
            + '	3\n'
            + ']'
        );
    });

    it('formats Object,', function () {
        assert.equal(formatJSON(JSON.parse('{"a": 1, "b": 2, "c": 3}')), '{\n'
            + '	"a": 1,\n'
            + '	"b": 2,\n'
            + '	"c": 3\n'
            + '}'
        );
    });

    it('formats Array with Object,', function () {
        assert.equal(formatJSON(JSON.parse('[1, 2, {"c": 3, "d": 4}]')), '[\n'
            + '	1,\n'
            + '	2,\n'
            + '	{\n'
            + '		"c": 3,\n'
            + '		"d": 4\n'
            + '	}\n'
            + ']'
        );
    });

    it('formats Object with Array,', function () {
        assert.equal(formatJSON(JSON.parse('{"a": 1, "b": 2, "c": [3, 4]}')), '{\n'
            + '	"a": 1,\n'
            + '	"b": 2,\n'
            + '	"c": [\n'
            + '		3,\n'
            + '		4\n'
            + '	]\n'
            + '}'
        );
    });

    it('formats Object with Array with Object with ...', function () {
        assert.equal(formatJSON(JSON.parse('{"a": 1, "b": 2, "c": [3, {"d":[4, "abc"], "e": {"5": "xyz", "def": [0]}}]}')), '{\n'
            + '	"a": 1,\n'
            + '	"b": 2,\n'
            + '	"c": [\n'
            + '		3,\n'
            + '		{\n'
            + '			"d": [\n'
            + '				4,\n'
            + '				"abc"\n'
            + '			],\n'
            + '			"e": {\n'
            + '				"5": "xyz",\n'
            + '				"def": [\n'
            + '					0\n'
            + '				]\n'
            + '			}\n'
            + '		}\n'
            + '	]\n'
            + '}'
        );
    });

    it('but errors when the JSON is not valid!', function() {
        assert.throws(function() {
            formatJSON('[');
        });
    });
});