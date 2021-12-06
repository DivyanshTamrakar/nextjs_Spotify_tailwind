import { HomeIcon, SearchIcon, PlusCircleIcon, LibraryIcon, HeartIcon, RssIcon } from '@heroicons/react/outline'

function Sidebar() {
    return (
        <div className="text-gray-500 p-3 text-sm">
            <div className="space-y-4">
                <button className="flex items-center space-x-4 hover:text-white">
                    <HomeIcon className="h-5 w-5" />
                    <p className="font-medium">  Home</p>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                    <SearchIcon className="h-5 w-5" />
                    <p className="font-medium"> Search</p>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                    <LibraryIcon className="h-5 w-5" />
                    <p className="font-medium"> Your Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                <button className="flex items-center space-x-4 hover:text-white">
                    <PlusCircleIcon className="h-5 w-5" />
                    <p className="font-medium"> Create Playlist</p>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                    <HeartIcon className="h-5 w-5" />
                    <p className="font-medium"> Liked Songs</p>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                    <RssIcon className="h-5 w-5" />
                    <p className="font-medium"> Your Episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
                <p>Playlist.....</p>
            </div>
        </div>
    )
}

export default Sidebar
