function at_least_one_tag_of_source(obj, source) {
    // Testing that there is at least one tag of given source
    if (obj === undefined) {
        return false;
    } else {
        var tags = obj.tag;
        var tag_found = false;
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (!tag_found) {
                tag_found = tag.source === source;
            }
        }
        return tag_found;
    }
}

function tag_exist_of_source(obj, source, type, category, value) {
    // Testing that there is at least one tag of given source
    if (obj === undefined) {
        return false;
    } else {
        var tags = obj.tag;
        var tag_found = false;
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (!tag_found) {
                tag_found = tag.source === source && tag.type === type && tag.category === category && tag.value === value;
            }
        }
        return tag_found;
    }
}

function trace_exists_for_application(traces, applicationName) {
    if (traces === undefined) {
        return false;
    } else {
        var trace_found = false;
        for (var i = 0; i < traces.length; i++) {
            var trace = traces[i];
            if (trace.application == applicationName) {
                trace_found = true;
                break;
            }
        }
        return trace_found;
    }
}

function is_metadata_tag_present_with_value(obj, source, category, value) {
    // Testing that there is at least one tag fulfilling the given parameters
    if (obj === undefined) {
        return false;
    } else {
        var tags = obj.tag;
        var tag_found = false;
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (tag.metadata === undefined) {
                continue;
            } else {
                if (tag.metadata.category == category && tag.metadata.source == source) {
                    tag_found = tag.metadata.value == value;
                }
            }
        }
        return tag_found;
    }
}

function is_metadata_tag_present(obj, source, category) {
    // Testing that there is at least one tag fulfilling the given parameters
    if (obj === undefined) {
        return false;
    } else {
        var tags = obj.tag;
        var tag_found = false;
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (tag.metadata === undefined) {
                continue;
            } else {
                tag_found = tag.metadata.category == category && tag.metadata.source == source;
            }
        }
        return tag_found;
    }
}

function is_rank_tag_present_with_value(obj, source, category, value) {
    // Testing that there is at least one tag fulfilling the given parameters
    if (obj === undefined) {
        return false;
    } else {
        var tags = obj.tag;
        var tag_found = false;
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (tag.rank === undefined) {
                continue;
            } else {
                if (tag.rank.category == category && tag.rank.source == source) {
                    tag_found = tag.rank.value == value;
                }
            }
        }
        return tag_found;
    }
}

function count_tag_with_value(obj, tag_type, source, category, value) {
    // Testing that there is at least one tag fulfilling the given parameters
    if (obj === undefined) {
        return 0;
    } else {
        var tags = obj.tag;
        var count = 0;
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (tag[tag_type] === undefined) {
                continue;
            } else {
                var t = tag[tag_type];
                if ((category == null || t.category == category) && t.source == source && t.value == value) {
                    count += 1;
                }
            }
        }
        return count;
    }
}
