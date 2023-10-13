
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseKGroup(ListNode* head, int k) {
    ListNode* dummy = new ListNode(0);
    dummy->next = head;
    ListNode* prev_group_end = dummy;

    while (true) {
        ListNode* group_start = prev_group_end->next;
        ListNode* group_end = group_start;

        // Check if there are at least k nodes in the group
        for (int i = 0; i < k; i++) {
            if (!group_end) {
                delete dummy;
                return dummy->next;
            }
            group_end = group_end->next;
        }

        // Reverse the current group
        prev_group_end->next = reverseSublist(group_start, group_end);
        group_start->next = group_end;

        // Update pointers for the next iteration
        prev_group_end = group_start;
    }

    ListNode* result = dummy->next;
    delete dummy;
    return result;
}

ListNode* reverseSublist(ListNode* start, ListNode* end) {
    ListNode* prev = nullptr;
    ListNode* current = start;

    while (current != end) {
        ListNode* temp = current->next;
        current->next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}
