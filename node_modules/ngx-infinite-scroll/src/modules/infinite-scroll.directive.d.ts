import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { InfiniteScrollEvent, IInfiniteScrollAction } from '../models';
export declare class InfiniteScrollDirective implements OnDestroy, OnChanges, AfterViewInit {
    private element;
    private zone;
    scrolled: EventEmitter<InfiniteScrollEvent>;
    scrolledUp: EventEmitter<InfiniteScrollEvent>;
    infiniteScrollDistance: number;
    infiniteScrollUpDistance: number;
    infiniteScrollThrottle: number;
    infiniteScrollDisabled: boolean;
    infiniteScrollContainer: any;
    scrollWindow: boolean;
    immediateCheck: boolean;
    horizontal: boolean;
    alwaysCallback: boolean;
    fromRoot: boolean;
    private disposeScroller;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges({ infiniteScrollContainer, infiniteScrollDisabled, infiniteScrollDistance }: SimpleChanges): void;
    setup(): void;
    handleOnScroll({ type, payload }: IInfiniteScrollAction): void;
    ngOnDestroy(): void;
    destroyScroller(): void;
}
