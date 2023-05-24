import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export const UnderConstruction = () => (
    <div className="border-l-4 border-red-700 bg-red-100 p-4">
        <div className="flex">
            <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-700" aria-hidden="true" />
            </div>
            <div className="ml-3">
                <p className="text-sm text-red-700">
                    Сайт находится в разработке. Высокий процент неполноты, ошибок и неточностей...
                </p>
            </div>
        </div>
    </div>
);
